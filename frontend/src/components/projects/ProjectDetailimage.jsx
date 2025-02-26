/* eslint-disable react/prop-types */

export default function ProjectDetailimage({ images }) {
  return (
    <div className="flex flex-col h-[320px] lg:h-[400px] xl:w-[360px] xl:h-[420px] gap-2">
      <div className="border-2 rounded-lg overflow-hidden" style={{ height: "50%" }}>
        <img src={"./images/"+images[0]} style={{}} loading="lazy"
          decoding="asynchronous"  className="object-cover w-full h-full" />
      </div>
      <div className="flex w-full gap-2" style={{ height: "50%" }}>
        <div className="w-1/2 border-2 rounded-lg overflow-hidden">
          <img src={"./images/"+images[1]} style={{}} loading="lazy"
          decoding="asynchronous"  className="object-cover w-full h-full" />
        </div>
        <div className="w-1/2 border-2 rounded-lg overflow-hidden">
          <img src={"./images/"+images[2]} style={{}} loading="lazy"
          decoding="asynchronous"  className="object-cover w-full h-full" />
        </div>
      </div>
    </div>
  )
}
