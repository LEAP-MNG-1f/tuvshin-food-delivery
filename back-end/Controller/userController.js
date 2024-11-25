import { User } from "../model/User.js";

const createUser = async (request, response) => {
  const result = await User.create({
    name: "tuvshin",
    email: "tuvshuk@gmail.com",
    password: "tuku1444",
    phoneNumber: "99111213",
  });
  response.json({
    succes: true,
    data: result,
  });
};
const getAllUser = async (request, response) => {
  const result = await User.find();
  response.json({
    succes: true,
    data: result,
  });
};

export { createUser, getAllUser };
