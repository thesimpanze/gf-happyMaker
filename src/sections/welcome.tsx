import { ArrowDown } from "lucide-react";
import HoverMe from "../components/hover";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import PopupImg from "../components/PopupImg";

const Welcome = () => {
  const [show, setShow] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="h-[100vh] bg-[#F56476] relative">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="z-50 fixed h-screen w-screen justify-center items-center top-0 left-0 flex  backdrop-blur-xs"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
          >
            <PopupImg isVisible={setIsVisible} />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="h-full w-full flex justify-center items-center ">
        <HoverMe text="What's your wish, honey?">
          <div className="flex flex-col justify-center items-center h-full text-white text-[15rem] font-bold font-playfair cursor-pointer">
            <h1 className="m-0 leading-none">Happy</h1>
            <span className="leading-none relative ">
              Turn <span className="text-[#F56476]">21</span>{" "}
              <span
                className="text-[25rem] absolute  bottom-0 right-0 leading-none translate-y-4 "
                style={{ WebkitTextStroke: "10px #F56476" }}
              >
                21
              </span>
              <span className="text-[25rem] absolute  bottom-0 right-0 leading-none translate-y-4">
                21
              </span>
            </span>
          </div>
        </HoverMe>
      </div>
      <div className="flex justify-center items-end h-screen absolute w-fit top-0 left-1/2 -translate-x-1/2 ">
        <motion.img
          src="/1.svg"
          alt=""
          className="h-screen object-contain cursor-pointer"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          whileTap={{ scale: 0.8 }}
          onClick={() => setIsVisible(true)}
        />
      </div>
      <div
        className={`absolute bottom-3 left-1/2 -translate-x-1/2
    bg-white text-primary rounded-full
    flex items-center 
    transition-all duration-500 ease-out delay-150
    ${show ? "pr-4 gap-2 cursor-pointer" : "p-0"}
  `}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        <ArrowDown size={40} />

        <span
          className={`overflow-hidden whitespace-nowrap
      transition-all duration-300 ease-out
      ${
        show
          ? "max-w-[200px] opacity-100 translate-x-0"
          : "max-w-0 opacity-0 translate-x-2"
      }
    `}
        >
          Scroll me
        </span>
      </div>
    </div>
  );
};

export default Welcome;
