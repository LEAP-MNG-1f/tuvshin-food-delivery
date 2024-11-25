import RecipeCard from "./RecipeCard";
import StarIcon from "../svg/StarIcon";
import Foodcategory from "./Foodcategory";
import Footer from "./Footer";

const Hero = () => {
  return (
    <div className="bg-green-500 w-full h-[788px] ">
      <div className="flex justify-around items-center py-44">
        <div className="flex gap-5 flex-col ">
          <div>
            <h3 className="font-semibold text-[55px] w-[360px] text-white ">
              Pinecone Food Delivery
            </h3>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white w-[384px]">
             Hymd , hurdan shuurhai , gert oir
            </h3>
          </div>
        </div>
        <div>
          <div>
            <img src="/FoodIcon.png" alt="" />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <RecipeCard />
      </div>
      <div className="mt-[180px] flex justify-around gap-[500px] items-center  ">
        <div className="flex items-center gap-3 ">
          <StarIcon />
          <h3 className="text-2xl font-bold">Хямдралтай</h3>
        </div>
        <div>
          <button className="hover:shadow-2xl">
            <h3 className="text-green-400 ">Бүгдийг харах</h3>
          </button>
        </div>
      </div>
      <div className="flex justify-center gap-10 mt-[30px]">
        <Foodcategory/>
      </div>
      <div className="mt-[120px] flex justify-around gap-[500px] items-center  ">
        <div className="flex items-center gap-3 ">
          <StarIcon />
          <h3 className="text-2xl font-bold">Үндсэн хоол</h3>
        </div>
        <div>
          <button className="hover:shadow-2xl">
            <h3 className="text-green-400">Бүгдийг харах</h3>
          </button>
        </div>
      </div>
      <div className="flex justify-center gap-10 mt-[30px]">
<p>data</p>
      </div>
      <div className="mt-[120px] flex justify-around gap-[500px] items-center  ">
        <div className="flex items-center gap-3 ">
          <StarIcon />
          <h3 className="text-2xl font-bold">Салад ба зууш</h3>
        </div>
        <div>
          <button className="hover:shadow-2xl">
            <h3 className="text-green-400">Бүгдийг харах</h3>
          </button>
        </div>
      </div>
      <div className="flex justify-center gap-10  mt-[30px]">
<p>data</p>
      </div>
      <Footer />
    </div>
  );
};
export default Hero;
