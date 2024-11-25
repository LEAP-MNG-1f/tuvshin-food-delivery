"use client";
import { useEffect, useState } from "react";
interface FoodItem {
  name: string;
  image: string;
  category: string;
  price: number;
}

const Foodcategory = () => {
  const [foodData, setFoodData] = useState<FoodItem[]>([]);
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/fooddata");
      const responsedata = await response.json();
      const realData = responsedata.data;
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
    <div className=" justify-center items-center grid grid-cols-4 grid-rows-4">
      {foodData.map((item, index) => (
        <div key={index} className="card shadow-lg m-4">
          <img
            className="w-[350px] object-cover object-center h-[180px] rounded-lg"
            src={item.image}
          />
          <div className="card-body flex flex-col justify-start">
            <p className="font-semibold text-lg">{item.name}</p>
            <h3 className="text-green-500">{item.category}</h3>
            <p>{item.price} </p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Foodcategory;
