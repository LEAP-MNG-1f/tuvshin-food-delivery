"use client";
import RecipeCard from "./RecipeCard";
import Footer from "./Footer";
import FoodPage from "./FoodPage";

const Hero = () => {
  return (
    <div className=" w-full">
      <div className="bg-green-500  flex flex-col md:flex-row justify-around items-center py-24 md:py-44">
        <div className="text-center md:text-left flex flex-col gap-5 items-center md:items-start">
          <div>
            <h3 className="font-semibold text-[40px] sm:text-[55px] text-white max-w-[360px]">
              Pinecone Food Delivery
            </h3>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white max-w-[384px]">
              Hymd , hurdan shuurhai , gert oir
            </h3>
          </div>
        </div>
        <div className="mt-8 md:mt-0">
          <img
            src="/FoodIcon.png"
            alt="Food Icon"
            className="w-[200px] md:w-[350px] mx-auto"
          />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <RecipeCard />
      </div>
      <div className="container mx-auto px-4">
        <FoodPage />
      </div>
      <Footer />
    </div>
  );
};

export default Hero;
