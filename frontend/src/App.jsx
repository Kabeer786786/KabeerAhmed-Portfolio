import Home from './pages/Home'
import Education from './pages/Education'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Achievements from './pages/Achievements'
import Certifications from './pages/Certifications'
import Contact from './pages/Contact'
import TopMenu from "./components/home/TopMenu";
import Menu from "./components/home/Menu";
// import { Homebtn, Educationbtn, Experiencebtn, Projectsbtn, Contactbtn, Achievementsbtn, Certificationsbtn, Skillsbtn } from "../../assets/menubtn.js"; 
import "./assets/styles.css";
import MenuRes from './components/home/MenuRes'

export default function App() {
  let styles1 = {
    overflow:"hidden",
    position: "relative",
    transition: `${.60}s cubic-bezier(${.28}, -${.03}, ${0}, ${.99})`,
  }
  let styles2 = {
    maxWidth: "100%",
    opacity: 0,
    transform: `translateX(${120}%)`,
    transitionDelay: `${.3}s`,
    transition: `transform ${0.9}s ease-in-out`,
  }

  return (
    <div>
      <div className="flex items-center justify-center " >
        <TopMenu />
      </div>
      <div className="flex items-center justify-center m-auto h-[80vh] md:h-[76vh]" style={styles1}>
        <div id='homepage' className="absolute hidden pages  " style={styles2}>
          <Home />
        </div>
        <div id='educationpage' className="absolute hidden pages " style={styles2}>
          <Education />
        </div>
        <div id='experiencepage' className="absolute hidden pages " style={styles2}>
          <Experience />
        </div>
        <div id='projectspage' className="absolute  hidden pages" style={styles2}>
          <Projects />
        </div>
        <div id='skillspage' className="absolute hidden pages " style={styles2}>
          <Skills />
        </div>
        <div id='achievementspage' className="absolute hidden pages " style={styles2}>
          <Achievements />
        </div>
        <div id='certificationspage' className="absolute hidden pages " style={styles2}>
          <Certifications />
        </div>
        <div id='contactpage' className="absolute hidden pages " style={styles2}>
          <Contact />
        </div>
      </div>

      <div className="flex items-center justify-center ">
       {(screen.width > 750) ? <Menu /> : <MenuRes />}
      </div>
    </div>
  )
}
