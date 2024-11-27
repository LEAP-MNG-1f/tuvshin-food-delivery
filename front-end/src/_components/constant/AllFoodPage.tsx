"use client";
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

const AllFoodPage = () => {
  const [foodData, setFoodData] = useState<FoodItem[]>([]);
  const [filteredFoodData, setFilteredFoodData] = useState<FoodItem[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/fooddata");
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
    <div>
      <div className="container m-auto grid grid-cols-4 justify-items-center items-center gap-10 mt-10 ">
        <div
          className="flex  items-center cursor-pointer border-1 border-black"
          onClick={() => filterByCategory("Хямдралтай")}
        >
          <h3 className="text-xl font-bold text-black mt-2">Хямдралтай</h3>
        </div>
        <div
          className="flex  items-center cursor-pointer"
          onClick={() => filterByCategory("Салад ба зууш")}
        >
          <h3 className="text-xl font-bold text-black mt-2">Салад ба зууш</h3>
        </div>
        <div
          className="flex  items-center cursor-pointer"
          onClick={() => filterByCategory("Амттан")}
        >
          <h3 className="text-xl font-bold text-black mt-2">Амттан</h3>
        </div>
        <div
          className="flex  items-center cursor-pointer"
          onClick={() => filterByCategory("Үндсэн хоол")}
        >
          <h3 className="text-xl font-bold text-black mt-2">Үндсэн хоол</h3>
        </div>
        {/* <div>
          <button className="hover:shadow-2xl " onClick={showAllFood}>
            <h3 className="text-green-400 ">Бүгдийг харах</h3>
          </button>
        </div> */}
      </div>

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
    </div>
  );
};
export default AllFoodPage;
