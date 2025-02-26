/* eslint-disable react/prop-types */
import "../../assets/certifications.css"
import confetti from "canvas-confetti";

export default function AchievementCard({ image, title, subtitle, year, info }) {
    let celebrate = () => {
        const duration = 5 * 1000; // 5 seconds
        const end = Date.now() + duration;

        const interval = setInterval(() => {
            if (Date.now() > end) {
                clearInterval(interval);
            } else {
                confetti({
                    particleCount: 50,
                    startVelocity: 30,
                    spread: 300,
                    origin: { x: Math.random(), y: Math.random() - 0.2 },
                });
            }
        }, 200);
    }
    return (
        <div className="relative w-[330px] h-[425px] sm:w-[450px] md:w-[600px] lg:w-[800px] xl:w-[600px] md:h-[200px] bg-white group achievecard flex flex-col md:flex-row items-center justify-center m-auto border-2 rounded-3xl overflow-hidden hover:border-violet-300 transition-shadow duration-300">
            <div className="md:w-1/2 h-[200px]">
                <img
                    src={image}
                    alt="Certificate"
                    loading="lazy"
                    decoding="asynchronous" 
                    className="min-h-[200px]"
                />
            </div>

            <div className="relative flex flex-col  mt-auto h-[200px] sm:h-[160px] md:h-full md:w-[65%] md:ml-[-0.5rem] md:mt-0 bg-gray-700 p-4"style={{borderTopLeftRadius: "1.5rem",borderEndEndRadius: "1rem",}}>
                <div
                    className="absolute -mt-[55px] right-0 md:right-auto md:bottom-[0px] md:-ml-[16%] lg:-ml-[12%] xl:-ml-[16%]  w-10 h-10 bg-gray-700 "
                    style={{ borderRadius: "1.5rem", borderBottomRightRadius: "0rem" }}
                ></div>
                <div className="absolute w-10 h-10 -mt-[55px] right-0 md:right-auto md:bottom-[0px] md:-ml-[16%] lg:-ml-[12%] xl:-ml-[16%] rounded-[1.5rem] bg-gray-100 border-2 border-gray-700 text-gray-900 flex items-center text-center justify-center">
                    <div onClick={celebrate} className="arrowmark cursor-pointer scale-125 group-hover:animate-pulse transition-opacity duration-700">🎉</div>
                </div>
                <p className="text-white xl:text-xl font-semibold">{title}</p>
                <div className="flex justify-between">
                    <p className="text-gray-300 text-sm font-semibold">{subtitle}</p>
                    <p className="text-gray-300 text-sm font-semibold">{year}</p>
                </div>
                <p className="text-gray-100 text-sm text-justify pt-2 font-semibold">{info}</p>
            </div>
        </div>

    )
}