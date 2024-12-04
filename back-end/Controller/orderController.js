import { Order } from "../model/Order.js";

const createOrder = async (request, response) => {
  try {
    const result = await Order.create(request.body);

    response.json({
      success: true,
      data: result,
    });
  } catch (error) {
    response.json({
      success: false,
      message: error.message,
    });
  }
};
const getAllOrder = async (request, response) => {
  try {
    const result = await Order.find().populate("customer").populate("foodIds");

    response.json({
      success: true,
      data: result,
    });
  } catch (error) {
    response.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export { createOrder, getAllOrder };
