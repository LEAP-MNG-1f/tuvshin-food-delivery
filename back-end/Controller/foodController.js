import { Food } from "../model/Food.js";

const createFoodData = async (request, response) => {
  const result = await Food.insertMany(allFoodDatas);
  response.json({
    succes: true,
    data: result,
  });
};
const getAllFoodData = async (request, response) => {
  const result = await Food.find();
  response.json({
    succes: true,
    data: result,
  });
};

export { createFoodData, getAllFoodData };
