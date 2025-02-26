import { useEffect, useState } from "react"
import { Homebtn, Educationbtn, Experiencebtn, Projectsbtn, Contactbtnres, Achievementsbtn, Certificationsbtn, Skillsbtn } from "../../assets/resmenubtn.js";

export default function MenuRes() {
    let [id, setId] = useState(0)
    let leftbtn = () => {
        if(id>0){
            id-=1;
            setId((newId) => newId - 1)
        }
        if (id === 0) {
            Homebtn();
        } else if (id === 1) {
            Educationbtn();
        } else if (id === 2) {
            Experiencebtn();
        } else if (id === 3) {
            Projectsbtn();
        } else if (id === 4) {
            Skillsbtn();
        } else if (id === 5) {
            Achievementsbtn();
        } else if (id === 6) {
            Certificationsbtn();
        } else if (id === 7) {
            Contactbtnres();
        }
    }
    let rightbtn = () => {
        if(id===7){
            id= 0
            setId(0)
        }else{
            id+=1
            setId((newId) => newId + 1)
        }
        if (id === 0) {
            Homebtn();
        }else if (id === 1) {
            Educationbtn();
        } else if (id === 2) {
            Experiencebtn();
        } else if (id === 3) {
            Projectsbtn();
        } else if (id === 4) {
            Skillsbtn();
        } else if (id === 5) {
            Achievementsbtn();
        } else if (id === 6) {
            Certificationsbtn();
        } else if (id === 7) {
            Contactbtnres();
        }
    }
    let styles = {
        overflow: "hidden",
        transition: `${.60}s cubic-bezier(${.28}, -${.03}, ${0}, ${.99})`,
      }
      let infostyles = {
        overflow: "hidden",
        opacity: 0,
        transform: `translateX(${200}px)`,
        transitionDelay: `${.6}s`,
        transition: `all ${.7}s ease-in-out`,
      }
      useEffect(() => {
        Homebtn();
      }, [])
    return (
        <div className="fixed flex w-[300px] items-center justify-between border-2 border-gray-400 rounded-full h-[50px] bottom-3 p-1 bg-gray-900" >
            <div onClick={leftbtn} className="flex justify-center border-2 border-gray-400 rounded-full h-full w-[40px] bg-cyan-600">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="w-6 rotate-180" xmlns="http://www.w3.org/2000/svg"><path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M268 112l144 144-144 144m124-144H100"></path></svg>
            </div>
            <div className="relative flex items-center justify-center text-xl font-semibold border-2 border-gray-300 ml-auto rounded-full h-full w-[200px] bg-gray-600 overflow-hidden" style={styles}>
                <h1 className="absolute resmenubtn " id="reshombtn" style={infostyles}>Home</h1>
                <h1 className="absolute resmenubtn " id="resedubtn" style={infostyles}>Education</h1>
                <h1 className="absolute resmenubtn " id="resexpbtn" style={infostyles}>Experience</h1>
                <h1 className="absolute resmenubtn " id="resprobtn" style={infostyles}>Projects</h1>
                <h1 className="absolute resmenubtn " id="resskibtn" style={infostyles}>Skills</h1>
                <h1 className="absolute resmenubtn " id="resachbtn" style={infostyles}>Achievements</h1>
                <h1 className="absolute resmenubtn " id="rescerbtn" style={infostyles}>Certifications</h1>
                <h1 className="absolute resmenubtn " id="resconbtn" style={infostyles}>Contact</h1>
            </div>
            <div onClick={rightbtn} className="flex justify-center border-2 border-gray-400 ml-auto rounded-full h-full w-[40px] bg-cyan-600">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="w-6" xmlns="http://www.w3.org/2000/svg"><path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M268 112l144 144-144 144m124-144H100"></path></svg>
            </div>
        </div>
    )
}
