import TitleInfo from "../components/home/TitleInfo";
import Image from "../components/home/Image";
import confetti from "canvas-confetti";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    function Celebrate() {
      const duration = 3 * 1000;
      const end = Date.now() + duration;

      const interval = setInterval(() => {
        if (Date.now() > end) {
          clearInterval(interval);
        } else {
          confetti({
            particleCount: 50,
            startVelocity: 30,
            spread: 500,
            origin: { x: 0.75, y: 0 - 0.2 },
          });
          confetti({
            particleCount: 50,
            startVelocity: 30,
            spread: 500,
            origin: { x: 0.25, y: 0 - 0.2 },
          });
        }
      }, 200);
    }
    Celebrate()
  }, [])
  return (
    <>
      <div className="flex flex-col lg:flex-row items-start justify-start w-full p-2 pb-24 md:pb-20 lg:pb-10 xl:pb-2" style={{ margin: "auto", maxWidth: "1400px",maxHeight:"80vh",overflow:"auto" }}>
        {(screen.width < 1000) 
            ? <><Image /><TitleInfo /></> 
            : <><TitleInfo /><Image /></>}
      </div>
    </>
  )
}
