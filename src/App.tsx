import { useEffect, useState } from "react";
import PreLoader from "./sections/preLoader";
import Hero from "./sections/hero";
import Lenis from "lenis";


function App() {
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    const lenis = new Lenis({
      duration: 2.5,
      easing: (t)=> Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })
    function raf(time: number){
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    return()=>{
      lenis.destroy()
    }
  },[])
  return (
    <>
      {loading && <PreLoader onFinish={() => setLoading(false)} />}
      <Hero />
      <div className="h-screen">dwada</div>
    </>
  );
}

export default App;
