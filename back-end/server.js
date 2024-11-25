import express from "express";
import cors from "cors";
import connectionDB from "./connectDB.js";

const server = express();
server.use(cors());
const PORT = 8000;

server.get("/test", async (req, res) => {
  const data = await connectionDB();
  let getdata = data.collection("sample_mflix");
  let result = await getdata.find().limit(10).toArray();
  res.json({
    succss: true,
    data: result,
  });
});

server.post("/food-create", async (req, res) => {
  try {
    const data = await connectionDB();
    const makedata = data.collection("product");
    const result = await makedata.insertMany([
      {
        name: "American Recipes",
        price: 9000,
        image:
          "https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Corndogs-7832ef6.jpg?quality=90&resize=556,505",
        category: "Амттан",
        ingredient: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
      },
      {
        name: "Korean Food",
        price: 12000,
        image:
          "https://www.thespruceeats.com/thmb/eFzxoZFO-ZWurv42gxrBveHYOf4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-korean-bibimbap-recipe-2118765-step-011-acab906539594dc9a668c7fbb753c43d.jpg",
        category: "Амттан",
        ingredient: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
      },
      {
        name: "Japanese Cuisine",
        price: 15000,
        image:
          "https://turpoisk.ua/images/blog/japonskaja-kuhnia/japon-kuhnia-1.jpg",
        category: "Амттан",
        ingredient: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
      },
      {
        name: "Italian Dishes",
        price: 8500,
        image:
          "https://insanelygoodrecipes.com/wp-content/uploads/2020/12/Homemade-Ground-Beef-Lasagna.png",
        category: "Амттан",
        ingredient: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
      },
      {
        name: "Mexican Tacos",
        price: 9500,
        image:
          "https://s23209.pcdn.co/wp-content/uploads/2019/04/Mexican-Street-TacosIMG_9091.jpg",
        category: "Салад ба зууш",
        ingredient: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
      },
      {
        name: "French Cuisine",
        price: 11000,
        image:
          "https://cooknshare.com/wp-content/uploads/2022/07/ratatouilleweb.jpg",
        category: "Салад ба зууш",
        ingredient: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
      },
      {
        name: "Chinese Dishes",
        price: 13000,
        image:
          "https://media.cnn.com/api/v1/images/stellar/prod/220921081550-05-chinese-foods-mapo-tofu.jpg?c=original",
        category: "Салад ба зууш",
        ingredient: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
      },
      {
        name: "Indian Cuisine",
        price: 14000,
        image:
          "https://cdn.britannica.com/94/240094-050-D5CC461B/Indian-naan-flatbread.jpg",
        category: "Салад ба зууш",
        ingredient: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
      },
      {
        name: "Mediterranean Meals",
        price: 10500,
        image:
          "https://minimalistbaker.com/wp-content/uploads/2016/07/The-Ultimate-Mediterranean-Bowl-SQUARE.jpg",
        category: "Хямдралтай",
        ingredient: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
      },
      {
        name: "Thai Food",
        price: 11500,
        image:
          "https://www.indulgebangkok.com/wp-content/uploads/2018/11/356fdc00e7ec5e447c1d322a91f8968a-1080x675.jpg",
        category: "Хямдралтай",
        ingredient: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
      },
      {
        name: "Vietnamese Pho",
        price: 12500,
        image:
          "https://www.inspiredtaste.net/wp-content/uploads/2016/06/Vietnamese-Pho-Soup-Recipe-1.jpg",
        category: "Хямдралтай",
        ingredient: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
      },
      {
        name: "Greek Dishes",
        price: 13500,
        image:
          "https://www.greekality.com/wp-content/uploads/2022/01/moussaka.png",
        category: "Хямдралтай",
        ingredient: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
      },
      {
        name: "Spanish Cuisine",
        price: 12500,
        image:
          "https://www.discoverspain.today/wp-content/uploads/2024/01/Spanish-paella-spanish-foods.jpg",
        category: "Үндсэн хоол",
        ingredient: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
      },
      {
        name: "Turkish Food",
        price: 9500,
        image:
          "https://www.cazbar.com/wp-content/uploads/2024/07/mahsa-shamshiri-fard-xlHOUotnpTc-unsplash-scaled.jpg",
        category: "Үндсэн хоол",
        ingredient: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
      },
      {
        name: "Middle Eastern Meals",
        price: 10000,
        image:
          "https://ik.imagekit.io/munchery/blog/tr:w-768/old-meets-new-the-roots-and-current-trends-of-middle-eastern-cooking.jpeg",
        category: "Үндсэн хоол",
        ingredient: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
      },
      {
        name: "Caribbean Cuisine",
        price: 11000,
        image:
          "https://foodinstitute.com/wp-content/uploads/2022/01/caribbean-food-trend.jpg",
        category: "Үндсэн хоол",
        ingredient: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
      },
    ]);
    res.json({
      succss: true,
      data: result,
    });
  } catch (e) {
    console.log(e);
  }
});
server.get("/food-information", async (req, res) => {
  const data = await connectionDB();
  let getdata = data.collection("food-data");
  let result = await getdata.find().toArray();
  res.json({
    succss: true,
    data: result,
  });
});

// server.delete("/delete-user", async (req, response) => {
//   const data = await connectionDB();

//   const collection = data.collection("product");
//   const result = await collection.deleteOne({
//     _id: new ObjectId("6740033c1d7fc0f370cca4b1"),
//   });

//   response.json({
//     succes: true,
//     data: result,
//   });
// });

// server.put("/update-user", async (req, response) => {
//   const data = await connectionDB();

//   const collection = data.collection("product");
//   const result = await collection.findOneAndUpdate(
//     {
//       name:"lambo"
//     },
//     {
//       $set: {
//         name:"lambo",
//         owner: "tuvshin@gmail.com",
//         price:"8800" ,
//         date: new Date()
//       },
//     }
//   );

//   response.json({
//     succes: true,
//     data: result,
//   });
// });

server.listen(PORT, (req, res) => {
  console.log(`server ajillaa http://localhost:${PORT}`);
});
