import TimelineResponsive from "../components/experience/TimelineResponsive";
import jobs from "../constants/experience";

export default function Experience() {
  let myjobs = [...jobs];
  let revjobs = [...jobs.reverse()];

  return (
    <div className="w-[360px] min-[420px]:w-[420px] sm:w-[500px] md:w-[650px] lg:w-[1000px] xl:w-[1400px] m-auto pt-4 pb-24 xl:pb-4" style={{ maxHeight: "80vh", maxWidth: "1500px",overflow:"auto" }}>
      <div className="relative flex items-center justify-start w-[300px] min-[420px]:w-[360px] sm:w-[450px] md:w-[550px] lg:w-[950px] xl:w-[1000px] m-auto " style={{ margin: "auto" }}>
        <TimelineResponsive jobs={(screen.width>1200)? myjobs:revjobs} />
      </div>
    </div>
  )
}