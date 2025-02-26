import SkillCard from "../components/skills/SkillCard"
import SkillCard2 from "../components/skills/SkillCard2"
import SkillCard3 from "../components/skills/SkillCard3"



function Skills() {
  return (
    <div className="grid xl:grid-cols-3 gap-3 items-center justify-center m-auto p-5 pb-24 xl:pt-6 xl:pb-20" style={{maxHeight:"80vh",maxWidth:"1400px", overflow:"auto"}}>
      <SkillCard />
      <SkillCard2 />
      <SkillCard3 />
    </div>
  )
}

export default Skills