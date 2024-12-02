"use client";

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
export type ArrayProps = {
  food: FoodItem[];
};
const Foodcategory = () => {
  return <div></div>;
};
export default Foodcategory;
