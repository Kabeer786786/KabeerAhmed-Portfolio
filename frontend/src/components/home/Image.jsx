import "../../assets/styles.css"

export default function Image() {
  return (
    <div className="w-full  lg:w-1/2 flex items-center justify-center xl:mt-3 m-auto group">
      <div className="bghomepic flex w-[270px] h-[200px] md:w-[275px] h-[250px] 3xl:w-[500px] 3xl:h-[400px]  items-center justify-center m-auto"></div>
      <div className="relative rounded-lg overflow-hidden">
        <img src="./homepic.svg" className="w-[400px] md:w-[500px] lg:w-[450px] xl:w-[550px]"/>
      </div>
    </div>
  )
}
