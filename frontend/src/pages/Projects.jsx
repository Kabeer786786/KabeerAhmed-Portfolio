import ProjectCardList from "../components/projects/ProjectCardList";
import "../assets/scrollers.css"
import projects from "../constants/projects";

export default function Projects() {
  
  return (
    <div className="flex items-start justify-start m-auto" style={{ height: "80vh", overflow:"auto",maxWidth:"1400px" }} >
      <div className="flex items-start justify-center m-auto">
        <div className="projectslist content-center p-4 pb-24 md:p-6 md:pb-24 xl:pb-20">
          <ProjectCardList projects={projects} />
        </div>
      </div>
    </div>
  )
}
