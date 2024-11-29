"use client";
import { useEffect, useState } from "react";
import ResponsiveDialog from "./Dialog";
export type FoodItem = {
  name: string;
  image: string;
  category: string;
  price: number;
  ingeredient: string;
};
export type ArrayProps = {
  food: FoodItem[];
};
const Foodcategory = () => {
  const [foodData, setFoodData] = useState<FoodItem[]>([]);
  console.log(foodData);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/foods");
      const responsedata = await response.json();
      const realData = responsedata?.data;
      console.log(realData);
      setFoodData(realData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex justify-center items-center ">
      <div className="grid grid-cols-4 grid-rows-4">
        {foodData.map((food, index) => (
          <ResponsiveDialog
            key={index}
            image={food.image}
            name={food.name}
            price={food.price}
            ingeredient={food.ingeredient}
          />
        ))}
      </div>
    </div>
  );
};
export default Foodcategory;
