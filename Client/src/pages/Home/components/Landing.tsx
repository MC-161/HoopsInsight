import title from "@/assets/Landing/HOOPSINSIGHT.svg";

const Landing = () => {
  return (
    <div className="content h-5/6 flex flex-col items-center">
      <img className="ml-6 mt-36 md:mt-40 w-96 md:w-fit h-fit" src={title} alt="" />
      <div className="landInfo flex flex-col text-white mt-10 rounded-lg p-4">
        <p className="text-xl font-medium md:backdrop-blur-sm p-1 rounded-md">
          "Track the Game, Master the Stats"
        </p>
        <button className=" mt-4 self-center rounded-md border-2 border-dashed border-white bg-none px-6 py-3 font-semibold uppercase transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none backdrop-blur-md">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Landing;
