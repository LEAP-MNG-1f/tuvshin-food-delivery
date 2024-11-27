"use client";
import RecipeCard from "./RecipeCard";
import StarIcon from "../svg/StarIcon";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import ResponsiveDialog from "./Dialog";

export type FoodItem = {
  name: string;
  image: string;
  category: string;
  price: number;
  ingredient: string;
};

export type ArrayProps = {
  food: FoodItem[];
};

const Hero = () => {
  const [foodData, setFoodData] = useState<FoodItem[]>([]);
  const [filteredFoodData, setFilteredFoodData] = useState<FoodItem[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/fooddata");
      const responsedata = await response.json();
      const realData = responsedata?.data;
      setFoodData(realData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setFilteredFoodData(foodData);
  }, [foodData]);

  const filterByCategory = (category: string) => {
    const filtered = foodData.filter((food) => food.category === category);
    setFilteredFoodData(filtered);
  };
  const showAllFood = () => {
    setFilteredFoodData(foodData);
  };

  return (
    <div className="bg-green-500 w-full h-[788px]">
      <div className="flex justify-around items-center py-44">
        <div className="flex gap-5 flex-col ">
          <div>
            <h3 className="font-semibold text-[55px] w-[360px] text-white ">
              Pinecone Food Delivery
            </h3>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white w-[384px]">
              Hymd , hurdan shuurhai , gert oir
            </h3>
          </div>
        </div>
        <div>
          <div>
            <img src="/FoodIcon.png" alt="" />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <RecipeCard />
      </div>

      {/* <div className="container m-auto grid grid-cols-5 justify-items-center items-center gap-10 mt-10 ">
        <div
          className="flex  items-center cursor-pointer"
          onClick={() => filterByCategory("Хямдралтай")}
        >
          <StarIcon />
          <h3 className="text-xl font-bold text-black mt-2">Хямдралтай</h3>
        </div>
        <div
          className="flex  items-center cursor-pointer"
          onClick={() => filterByCategory("Салад ба зууш")}
        >
          <StarIcon />
          <h3 className="text-xl font-bold text-black mt-2">Салад ба зууш</h3>
        </div>
        <div
          className="flex  items-center cursor-pointer"
          onClick={() => filterByCategory("Амттан")}
        >
          <StarIcon />
          <h3 className="text-xl font-bold text-black mt-2">Амттан</h3>
        </div>
        <div
          className="flex  items-center cursor-pointer"
          onClick={() => filterByCategory("Үндсэн хоол")}
        >
          <StarIcon />
          <h3 className="text-xl font-bold text-black mt-2">Үндсэн хоол</h3>
        </div>
        <div>
          <button className="hover:shadow-2xl " onClick={showAllFood}>
            <h3 className="text-green-400 ">Бүгдийг харах</h3>
          </button>
        </div>
      </div> */}

      <div className="container m-auto ">
        <div className="grid grid-cols-4 justify-center gap-10 mt-[30px]">
          {filteredFoodData.map((food, index) => (
            <ResponsiveDialog
              key={index}
              image={food.image}
              name={food.name}
              price={food.price}
              category={food.category}
              ingredient={food.ingredient}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Hero;
