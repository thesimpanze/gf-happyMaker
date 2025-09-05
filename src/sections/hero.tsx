import { Cat } from "lucide-react";

function Hero() {
  return (
    <div className="h-screen w-full bg-black flex flex-col justify-center items-center">
      <div className="text-white text-[9rem] h-[85%] bg-amber-950 flex flex-col justify-center items-center">
        <div className=" uppercase  w-full text-center pr-10 flex justify-center items-center gap-2 ">
          <Cat size={100} strokeWidth={1.5}/> How Was
        </div>
        <div className=" uppercase  text-right w-full pr-10 h-fit flex justify-center items-center">
          <div className=" text-sm w-[30%] text-left m-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            veritatis aliquam quia vitae quibusdam expedita.
          </div>
          <h1 className="">Ur day</h1>
        </div>
        <div className=" uppercase  text-center">Honeyy?</div>
      </div>
    </div>
  );
}

export default Hero;
