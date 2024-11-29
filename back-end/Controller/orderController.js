import { Order } from "../model/Order.js";

const createOrder = async (request, response) => {
  const result = await Order.insertMany(allFoodDatas);
  response.json({
    succes: true,
    data: result,
  });
};
const getAllOrder = async (request, response) => {
  const result = await Order.find();
  response.json({
    succes: true,
    data: result,
  });
};

export { createOrder, getAllOrder };
