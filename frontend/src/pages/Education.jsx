import MainBlock from "../components/education/MainBlock";
import BlockList from "../components/education/BlockList"
import education from "../constants/education";

function Education() {
    let index=1
  return (
    <div className="grid xl:flex items-center justify-center gap-4 md:gap-2 p-4 pb-24 xl:pb-4" style={{ margin: "auto", maxWidth: "1400px",maxHeight:"80vh",overflow:"auto" }}>
      <MainBlock edu={education} index={index-1} />
      <BlockList education={education}/>
    </div>
  )
}

export default Education
