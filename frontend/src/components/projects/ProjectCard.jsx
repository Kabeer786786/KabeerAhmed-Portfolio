/* eslint-disable react/prop-types */
import ProjectDetail from "./ProjectDetail"
import "../../assets/popup.css";
import { useEffect } from "react";

export default function ProjectCard({ project }) {
    const toggleMenu = (id) => {
        const popup = document.getElementById("pop"+id);
        // Close any other open menus
        document.querySelectorAll('.singleproject.show').forEach(openMenu => {
            if (openMenu.id !== id) {
                openMenu.classList.remove('show');
                setTimeout(() => openMenu.style.display = "none", 500);
            }
        });
    
        // Toggle the current menu
        if (popup.style.display === "none" || !popup.classList.contains("show")) {
            popup.style.display = "inline-block"; 
            setTimeout(() => popup.classList.add("show"), 10); 
            
            document.querySelectorAll('.popupbutton').forEach(openMenu => {
                openMenu.style.display = "none";
                setTimeout(() => openMenu.classList.add("dontshow"), 20);
            });
        } else {
            popup.classList.remove("show");
            setTimeout(() => popup.style.display = "none", 500); 
        }
    };
    useEffect(()=>{
        function myfunc(){
            window.onclick = (event) => {
                if (!event.target.matches('.popupbutton')) {
                    document.querySelectorAll('.singleproject.show').forEach(openMenu => {
                        openMenu.classList.remove('show');
                        setTimeout(() => openMenu.style.display = "none", 500); 
                        document.querySelectorAll('.popupbutton').forEach(openMenu2 => {
                            setTimeout(() => openMenu2.classList.remove("dontshow"), 20);                        
                            openMenu2.style.display = "block";
                        });
                    });
                    
                }
            };
            
            // Prevent menu clicks from propagating to the window
            document.querySelectorAll('.singleproject').forEach(menu => {
                menu.addEventListener('click', (event) => {
                    if (!event.target.matches('.closeme')) {
                        event.stopPropagation(); // Prevent menu clicks from closing the menu
                    }
                });
            });  
        }
        myfunc()
    },[])
    return (
        <>
            <div id={project.id} className="popupbutton "  onClick={() => toggleMenu(project.id)}>
                <div className="relative h-32 md:h-[10rem] xl:h-[8.5rem] cursor-pointer bg-black/25 flex border-2 border-gray-500 rounded-xl m-auto p-3 md:p-5 projectcard">
                    <div className="">
                        <p className="text-lg md:text-xl text-white">{project.title}</p>
                        <p className="text-gray-400 pt-1 pr-6">{project.subtitle}</p>
                    </div>
                    <div className="absolute bottom-4 right-4 pl-1">
                        <div className="arrowcircle flex items-center justify-center w-8 h-8 md:w-10 md:h-10 border-2 rounded-full">
                            <div className="arrow-mark ">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="w-5 md:w-6" xmlns="http://www.w3.org/2000/svg"><path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M268 112l144 144-144 144m124-144H100"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id={"pop"+project.id} className="flex items-center justify-center md:ml-10 lg:ml-16 xl:ml-16 singleproject">
                <ProjectDetail project={project} />
            </div>
        </>
    )
}
