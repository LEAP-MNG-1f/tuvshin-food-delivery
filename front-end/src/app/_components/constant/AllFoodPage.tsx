"use client";
import { useEffect, useState } from "react";
import ResponsiveDialog from "./Dialog";

export type FoodItem = {
  id: string;
  name: string;
  image: string;
  categoryId: string;
  price: number;
  ingeredient: string;
};

const AllFoodPage = () => {
  const [foodData, setFoodData] = useState<FoodItem[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/fooddata");
      const responsedata = await response.json();
      setFoodData(responsedata?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container m-auto ">
      <div className="grid grid-cols-4 justify-center gap-10 mt-[30px]">
        {foodData.map((food, index) => (
          <ResponsiveDialog
            key={index}
            image={food.image}
            price={food.price}
            name={food.name}
            ingeredient={food.ingeredient}
          />
        ))}
      </div>
    </div>
  );
};

export default AllFoodPage;
