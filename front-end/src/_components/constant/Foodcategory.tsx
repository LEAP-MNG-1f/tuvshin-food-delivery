type CardText = {
  image: string;
  amount: string;
  description: string;
};

const Foodcategory = (props: CardText) => {
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
