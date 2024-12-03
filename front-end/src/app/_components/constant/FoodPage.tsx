"use client";
import { useTheme } from "@emotion/react";
import { Button, Dialog, DialogTitle, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { groupBy } from "lodash";
import StarIcon from "../svg/StarIcon";
import { FoodItem } from "./AllFoodPage";

export type DialogProps = {
  image: string;
  price: number;
  name: string;
  ingredient: string;
};

const ResponsiveDialog = ({ image, price, name, ingredient }: DialogProps) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  return (
    <>
      <Button onClick={() => setOpen(true)}>
        <div className="flex flex-col gap-2 justify-start items-start shadow-lg">
          <img
            className="w-[350px] object-cover h-[180px] rounded-lg"
            src={image}
            alt={name}
          />
          <h3 className="text-black text-lg font-semibold">{name}</h3>
          <p className="text-green-500 text-lg font-semibold">{price} ₮</p>
        </div>
      </Button>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          <div className="flex flex-col md:flex-row gap-10">
            <div>
              <img
                className="w-full md:w-[500px] h-[300px] rounded-lg"
                src={image}
                alt={name}
              />
            </div>
            <div className="flex flex-col gap-9">
              <div>
                <p className="font-semibold text-lg">{name}</p>
                <p className="text-green-500">{price} ₮</p>
              </div>
              <div>
                <p className="font-semibold text-lg">Орц</p>
                <p className="w-full md:w-[200px] font-normal text-base line-clamp-3 text-[#767676] rounded-lg bg-gray-200 p-2">
                  {ingredient}
                </p>
              </div>
              <button
                className="bg-[#18BA51] text-white w-full md:w-[204px] rounded-xl h-[54px]"
                onClick={() => setOpen(false)}
              >
                Сагслах
              </button>
            </div>
          </div>
        </DialogTitle>
      </Dialog>
    </>
  );
};

export const FoodPage = () => {
  const [foodDatas, setFoodDatas] = useState<FoodItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:8000/api/foods");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const responsedata = await response.json();
      const realData: FoodItem[] = responsedata?.data || [];
      setFoodDatas(realData);
    } catch (error) {
      console.error("Error fetching food data:", error);
      setError(
        error instanceof Error ? error.message : "An unknown error occurred"
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const groupedData = groupBy(
    foodDatas,
    (foodData) => foodData?.categoryId?.name
  );

  return (
    <div className="container mx-auto mt-24">
      {Object.entries(groupedData).map(([categoryTitle, categoryRecipes]) => {
        return (
          <div key={categoryTitle} className="mb-12">
            <h2 className="font-bold text-xl mb-8 flex items-center gap-2">
              <StarIcon />
              {categoryTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {(categoryRecipes as FoodItem[]).map((recipe) => (
                <div
                  key={recipe._id}
                  className="cursor-pointer transition-transform hover:scale-105"
                >
                  <ResponsiveDialog
                    image={recipe.image || "https://via.placeholder.com/150"}
                    name={recipe.name || "Нэр байхгүй"}
                    price={recipe.price || 0}
                    ingredient={recipe.ingeredient || "Орц байхгүй"}
                  />
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FoodPage;
