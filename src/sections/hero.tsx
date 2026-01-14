import CircularText from "../components/CircularText";

function Hero() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center font-black">
      <div className="text-[#F56476] text-[9rem] h-[85%]  flex flex-col justify-center items-center relative">
        <div className="absolute top-0 right-1/8 -translate-y-5 ">
          <CircularText
            text="*ITS*YOUR*DAY"
            onHover="speedUp"
            spinDuration={20}
            className="text-primary"
          />
        </div>
        <div className=" uppercase   text-center  flex  items-center gap-2 w-2/3">
          <h1 className="">Happy</h1>
        </div>
        <div className=" uppercase  text-right w-full pr-10 h-fit flex justify-center items-center">
          <div className=" text-base w-[30%] text-left m-auto font-normal">
            Today is your day, love. let's celebrate your birthday with the most
            coolest boyfriend ever xixi.
          </div>
          <h1 className="">Birthday</h1>
        </div>
        <div className=" uppercase  text-center">Honeyy</div>
      </div>
    </div>
  );
}

export default Hero;
