"use client";

import { useEffect, useState } from "react";
import { ResponsiveDialog } from "./FoodPage";

export type FoodItem = {
  _id: string;
  name: string;
  price: number;
  image: string;
  categoryId: {
    _id: string;
    name: string;
    __v: number;
  };
  ingeredient: string;
  __v: number;
};
const AllFood = () => {
  const [foodData, setFoodData] = useState<FoodItem[]>([]);
  const [filteredFoodData, setFilteredFoodData] = useState<FoodItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedRecipe, setSelectedRecipe] = useState<FoodItem | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/foods");
      const responsedata = await response.json();
      const realData = responsedata?.data;
      setFoodData(realData || []);
    } catch (error) {
      console.error("Error fetching data:", error);
      setFoodData([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setFilteredFoodData(foodData);
  }, [foodData]);

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    if (categoryId === "") {
      setFilteredFoodData(foodData);
    } else {
      setFilteredFoodData(
        foodData.filter((food) => food.categoryId._id === categoryId)
      );
    }
  };

  const handleCardClick = (food: FoodItem) => {
    setSelectedRecipe(food);
  };

  const uniqueCategories = Array.from(
    new Map(
      foodData.map((food) => [food.categoryId._id, food.categoryId])
    ).values()
  );
  const showAllFood = () => {
    setFilteredFoodData(foodData);
  };

  return (
    <div className="container max-w-[1200px] m-auto mt-10">
      <div className="flex flex-wrap justify-center mb-8">
        <div>
          <button
            onClick={showAllFood}
            className={`px-4 py-2 rounded-md w-[180px]  ${
              selectedCategory === ""
                ? "bg-green-500 text-white"
                : "bg-gray-200"
            }`}
          >
            Бүгдийг харах
          </button>
        </div>
        <div>
          {uniqueCategories.map((category) => (
            <button
              key={`category-${category._id}`}
              onClick={() => handleCategoryClick(category._id)}
              className={`w-[180px] ml-[75px] px-4 py-2 rounded-lg ${
                selectedCategory === category._id
                  ? "bg-green-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
        {filteredFoodData.map((food, index) => (
          <div
            key={`food-${food._id}-${index}`}
            onClick={() => handleCardClick(food)}
            className="border p-4 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <img
              src={food.image}
              alt={food.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="text-xl font-bold mt-2">{food.name}</h3>
            <p className="text-green-500 font-semibold">
              {food.price.toLocaleString()}₮
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllFood;
