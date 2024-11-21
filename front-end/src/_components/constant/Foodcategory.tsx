type CardText = {
  image: string;
  amount: string;
  description: string;
};

const Foodcategory = (props: CardText) => {
  const recipes = [
    {
      _id: 1,
      name: "American Recipes",
      price: 9000,
      image: "https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Corndogs-7832ef6.jpg?quality=90&resize=556,505",
      category: "Амттан",
      ingredient: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
    },
    {
      _id: 2,
      name: "Korean Food",
      price: 12000,
      image: "https://www.thespruceeats.com/thmb/eFzxoZFO-ZWurv42gxrBveHYOf4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-korean-bibimbap-recipe-2118765-step-011-acab906539594dc9a668c7fbb753c43d.jpg",
      category: "Амттан",
      ingredient: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
    },
    {
      _id: 3,
      name: "Japanese Cuisine",
      price: 15000,
      image: "https://turpoisk.ua/images/blog/japonskaja-kuhnia/japon-kuhnia-1.jpg",
      category: "Амттан",
      ingredient: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
    },
    {
      _id: 4,
      name: "Italian Dishes",
      price: 8500,
      image: "https://insanelygoodrecipes.com/wp-content/uploads/2020/12/Homemade-Ground-Beef-Lasagna.png",
      category: "Амттан",
      ingredient: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
    },
    {
      _id: 5,
      name: "Mexican Tacos",
      price: 9500,
      image: "https://s23209.pcdn.co/wp-content/uploads/2019/04/Mexican-Street-TacosIMG_9091.jpg",
      category: "Салад ба зууш",
      ingredient: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
    },
    {
      _id: 6,
      name: "French Cuisine",
      price: 11000,
      image: "https://cooknshare.com/wp-content/uploads/2022/07/ratatouilleweb.jpg",
      category: "Салад ба зууш",
      ingredient: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
    },
    {
      _id: 7,
      name: "Chinese Dishes",
      price: 13000,
      image: "https://media.cnn.com/api/v1/images/stellar/prod/220921081550-05-chinese-foods-mapo-tofu.jpg?c=original",
      category: "Салад ба зууш",
      ingredient: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
    },
    {
      _id: 8,
      name: "Indian Cuisine",
      price: 14000,
      image: "https://cdn.britannica.com/94/240094-050-D5CC461B/Indian-naan-flatbread.jpg",
      category: "Салад ба зууш",
      ingredient: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
    },
    {
      _id: 9,
      name: "Mediterranean Meals",
      price: 10500,
      image: "https://minimalistbaker.com/wp-content/uploads/2016/07/The-Ultimate-Mediterranean-Bowl-SQUARE.jpg",
      category: "Хямдралтай",
      ingredient: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
    },
    {
      _id: 10,
      name: "Thai Food",
      price: 11500,
      image: "https://www.indulgebangkok.com/wp-content/uploads/2018/11/356fdc00e7ec5e447c1d322a91f8968a-1080x675.jpg",
      category: "Хямдралтай",
      ingredient: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
    },
    {
      _id: 11,
      name: "Vietnamese Pho",
      price: 12500,
      image: "https://www.inspiredtaste.net/wp-content/uploads/2016/06/Vietnamese-Pho-Soup-Recipe-1.jpg",
      category: "Хямдралтай",
      ingredient: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
    },
    {
      _id: 12,
      name: "Greek Dishes",
      price: 13500,
      image: "https://www.greekality.com/wp-content/uploads/2022/01/moussaka.png",
      category: "Хямдралтай",
      ingredient: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
    },
    {
      _id: 13,
      name: "Spanish Cuisine",
      price: 12500,
      image: "https://www.discoverspain.today/wp-content/uploads/2024/01/Spanish-paella-spanish-foods.jpg",
      category: "Үндсэн хоол",
      ingredient: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
    },
    {
      _id: 14,
      name: "Turkish Food",
      price: 9500,
      image: "https://www.cazbar.com/wp-content/uploads/2024/07/mahsa-shamshiri-fard-xlHOUotnpTc-unsplash-scaled.jpg",
      category: "Үндсэн хоол",
      ingredient: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
    },
    {
      _id: 15,
      name: "Middle Eastern Meals",
      price: 10000,
      image: "https://ik.imagekit.io/munchery/blog/tr:w-768/old-meets-new-the-roots-and-current-trends-of-middle-eastern-cooking.jpeg",
      category: "Үндсэн хоол",
      ingredient: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
    },
    {
      _id: 16,
      name: "Caribbean Cuisine",
      price: 11000,
      image: "https://foodinstitute.com/wp-content/uploads/2022/01/caribbean-food-trend.jpg",
      category: "Үндсэн хоол",
      ingredient: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
    },
  ];
  return (
    <div className="flex justify-center items-center">
      <div className="card shadow-lg ">
        <img
          className="w-[350px] object-cover object-center h-[180px] rounded-lg"
          src={props.image}
        />
        <div className="card-body flex flex-col justify-start ">
          <p className="font-semibold text-lg">{props.description}</p>
          <h3 className="text-green-500">{props.amount}</h3>
        </div>
      </div>
    </div>
  );
};
export default Foodcategory;
