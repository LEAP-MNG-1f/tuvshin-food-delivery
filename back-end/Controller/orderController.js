import { Order } from "../model/Order.js";

const createOrder = async (request, response) => {
  const result = await Order.create({
    customer: "67468882c612a0d439bec45d",
    orderNumber: 3,
    foodIds: [
      "67491f2a0c6ff00faa93d9b7",
      "67491f2a0c6ff00faa93d9b8",
      "67491f2a0c6ff00faa93d9b9",
    ],
    totalPrice: 12000,
    process: "active",
    createDate: new Date(),
    district: " Bayangol",
    Khoroo: "27-r horoo",
    Apartment: "naranbulag",
  });
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
