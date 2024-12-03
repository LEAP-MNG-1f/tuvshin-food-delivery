import { Order } from "../model/Order.js";

const createOrder = async (request, response) => {
  try {
    const {
      customer,
      orderNumber,
      foodIds,
      totalPrice,
      process,
      district,
      Khoroo,
      Apartment,
      phone,
      paymentType,
      detail,
    } = req.body;

    const result = await orderModel.create({
      customer,
      orderNumber,
      foodIds,
      totalPrice,
      process: process || "active",
      createDate: new Date(),
      district,
      Khoroo,
      Apartment,
      phone,
      paymentType: paymentType,
      detail,
    });

    res.json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
const getAllOrder = async (request, response) => {
  try {
    const result = await orderModel
      .find()
      .populate("customer")
      .populate("foodIds");

    res.json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export { createOrder, getAllOrder };
