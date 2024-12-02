import { categoryModel } from "../model/Category.js";

const createcategory = async (request, response) => {
  const result = await categoryModel.insertMany([
    {
      name: "Хямдралтай",
    },
    {
      name: "Салад ба зууш",
    },
    {
      name: "Амттан",
    },
    {
      name: "Үндсэн хоол",
    },
  ]);
  response.json({
    succes: true,
    data: result,
  });
};

const getAllCategory = async (request, response) => {
  const result = await categoryModel.find();
  response.json({
    succes: true,
    data: result,
  });
};

export { createcategory, getAllCategory };
