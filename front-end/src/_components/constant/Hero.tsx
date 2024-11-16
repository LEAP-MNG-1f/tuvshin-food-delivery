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
              Horem ipsum dolor sit amet, consectetur adipiscing elit.
            </h3>
          </div>
        </div>
        <div>
          <div>
            <img src="/FoodIcon.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
