import { Category } from "../model/Category.js";

const createcategory = async (request, response) => {
  const result = await Category.insertMany([
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
  const result = await Category.find();
  response.json({
    succes: true,
    data: result,
  });
};

export { createcategory, getAllCategory };
