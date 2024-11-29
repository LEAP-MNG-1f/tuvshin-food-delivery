"use client";
import React, { useState, useEffect } from "react";
import StarIcon from "../svg/StarIcon";

const FoodPage = () => {
  const [discountData, setDiscountData] = useState<any[]>([]);
  const [mainDishData, setMainDishData] = useState<any[]>([]);
  const [saladData, setSaladData] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/fooddata")
      .then((res) => res.json())
      .then((data) => setDiscountData(data))
      .catch((error) => console.error("Error fetching discounts:", error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8000/api/fooddata")
      .then((res) => res.json())
      .then((data) => setMainDishData(data))
      .catch((error) => console.error("Error fetching main dishes:", error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8000/api/fooddata")
      .then((res) => res.json())
      .then((data) => setSaladData(data))
      .catch((error) => console.error("Error fetching salads:", error));
  }, []);

  return (
    <div className="mt-[180px]">
      <div className="flex justify-around gap-[500px] items-center">
        <div className="flex items-center gap-3">
          <StarIcon />
          <h3 className="text-2xl font-bold">Хямдралтай</h3>
        </div>
        <div>
          <button className="hover:shadow-2xl">
            <h3 className="text-green-400">Бүгдийг харах</h3>
          </button>
        </div>
      </div>
      <div className="flex justify-center gap-10 mt-[30px]">
        {discountData.length > 0 ? (
          discountData.map((item) => (
            <div key={item.id} className="food-item">
              <img src={item.image} />
              <h4>{item.name}</h4>
              <p>{item.price}</p>
            </div>
          ))
        ) : (
          <p>Түр хүлээнэ үү...</p>
        )}
      </div>

      <div className="mt-[120px] flex justify-around gap-[500px] items-center">
        <div className="flex items-center gap-3">
          <StarIcon />
          <h3 className="text-2xl font-bold">Үндсэн хоол</h3>
        </div>
        <div>
          <button className="hover:shadow-2xl">
            <h3 className="text-green-400">Бүгдийг харах</h3>
          </button>
        </div>
      </div>
      <div className="flex justify-center gap-10 mt-[30px]">
        {mainDishData.length > 0 ? (
          mainDishData.map((item) => (
            <div key={item.id} className="food-item">
              <img src={item.image} />
              <h4>{item.name}</h4>
              <p>{item.price}</p>
            </div>
          ))
        ) : (
          <p>Түр хүлээнэ үү...</p>
        )}
      </div>

      <div className="mt-[120px] flex justify-around gap-[500px] items-center">
        <div className="flex items-center gap-3">
          <StarIcon />
          <h3 className="text-2xl font-bold">Салад ба зууш</h3>
        </div>
        <div>
          <button className="hover:shadow-2xl">
            <h3 className="text-green-400">Бүгдийг харах</h3>
          </button>
        </div>
      </div>
      <div className="flex justify-center gap-10 mt-[30px]">
        {saladData.length > 0 ? (
          saladData.map((item) => (
            <div key={item.id} className="food-item">
              <img src={item.image} />
              <h4>{item.name}</h4>
              <p>{item.price}</p>
            </div>
          ))
        ) : (
          <p>Түр хүлээнэ үү...</p>
        )}
      </div>
    </div>
  );
};

export default FoodPage;
