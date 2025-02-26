function ToggleBtn() {
    const resmenubtn = document.querySelectorAll(".resmenubtn");
    resmenubtn.forEach(block => {
        block.style.opacity = 0;
        block.style.transform = `translateX(${200}%)`;

    });
    const pages = document.querySelectorAll(".pages");
    pages.forEach(block => {
        block.style.transform = `translateX(${-150}%)`;
    });
}

function SliderLeft(id) {
    const pagez = document.getElementById(id);
    pagez.style.transform = `translateX(${-150}%)`;
}
function SliderRight(id) {
    const pagez = document.getElementById(id);
    pagez.style.display = "block";
    pagez.style.transform = `translateX(${150}%)`;
}
function SliderLeftMenu(id){
    const resmenu = document.getElementById(id);
    resmenu.style.transform = `translateX(${-200}px)`;
}
function SliderRightMenu(id){
    const resmenu = document.getElementById(id);
    resmenu.style.transform = `translateX(${200}px)`;
}
function Homebtn() {
    ToggleBtn();
    SliderRight("educationpage");
    SliderRight("experiencepage");
    SliderRight("projectspage");
    SliderRight("skillspage");
    SliderRight("achievementspage");
    SliderRight("certificationspage");
    SliderRight("contactpage");

    const page = document.getElementById("homepage");
    page.style.display = "block";
    page.style.opacity = `${1}`;
    page.style.transform = `translateX(${0})`;

    SliderRightMenu('resedubtn')
    SliderRightMenu('resexpbtn')
    SliderRightMenu('resprobtn')
    SliderRightMenu('resskibtn')
    SliderRightMenu('resachbtn')
    SliderRightMenu('rescerbtn')
    SliderRightMenu('resconbtn')
    const btn = document.getElementById("reshombtn");
    btn.style.display = "block";
    btn.style.opacity = `${1}`;
    btn.style.transform = `translateX(${0}px)`;   
}

function Educationbtn() {
    ToggleBtn();
    SliderLeft("homepage")
    SliderRight("experiencepage")
    SliderRight("projectspage");
    SliderRight("skillspage");
    SliderRight("achievementspage");
    SliderRight("certificationspage");
    SliderRight("contactpage");

    const page = document.getElementById("educationpage");
    page.style.display = "block";
    page.style.opacity = `${1}`;
    page.style.transform = `translateX(${0})`;

    SliderLeftMenu('reshombtn')
    SliderRightMenu('resexpbtn')
    SliderRightMenu('resprobtn')
    SliderRightMenu('resskibtn')
    SliderRightMenu('resachbtn')
    SliderRightMenu('rescerbtn')
    SliderRightMenu('resconbtn')
    const btn = document.getElementById("resedubtn");
    btn.style.display = "block";
    btn.style.opacity = `${1}`;
    btn.style.transform= `translateX(${0}px)`

}

function Experiencebtn() {
    ToggleBtn();
    SliderLeft("homepage")
    SliderLeft("educationpage")
    SliderRight("projectspage");
    SliderRight("skillspage");
    SliderRight("achievementspage");
    SliderRight("certificationspage");
    SliderRight("contactpage");

    const page = document.getElementById("experiencepage");
    page.style.display = "block";
    page.style.opacity = `${1}`;
    page.style.transform = `translateX(${0})`;

    SliderLeftMenu('reshombtn')
    SliderLeftMenu('resedubtn')
    SliderRightMenu('resprobtn')
    SliderRightMenu('resskibtn')
    SliderRightMenu('resachbtn')
    SliderRightMenu('rescerbtn')
    SliderRightMenu('resconbtn')
    const btn = document.getElementById("resexpbtn");
    btn.style.display = "block";
    btn.style.opacity = `${1}`;
    btn.style.transform = `translateX(${0}px)`;
}

function Projectsbtn() {
    ToggleBtn();
    SliderLeft("homepage")
    SliderLeft("educationpage")
    SliderLeft("experiencepage");
    SliderRight("skillspage");
    SliderRight("achievementspage");
    SliderRight("certificationspage");
    SliderRight("contactpage");

    const page = document.getElementById("projectspage");
    page.style.display = "block";
    page.style.opacity = `${1}`;
    page.style.transform = `translateX(${0})`;

    SliderLeftMenu('reshombtn')
    SliderLeftMenu('resedubtn')
    SliderLeftMenu('resexpbtn')
    SliderRightMenu('resskibtn')
    SliderRightMenu('resachbtn')
    SliderRightMenu('rescerbtn')
    SliderRightMenu('resconbtn')
    const btn = document.getElementById("resprobtn");
    btn.style.display = "block";
    btn.style.opacity = `${1}`;
    btn.style.transform = `translateX(${0}px)`;

}

function Skillsbtn() {
    ToggleBtn();
    SliderLeft("homepage")
    SliderLeft("educationpage")
    SliderLeft("experiencepage");
    SliderLeft("projectspage");
    SliderRight("achievementspage");
    SliderRight("certificationspage");
    SliderRight("contactpage");

    const page = document.getElementById("skillspage");
    page.style.display = "block";
    page.style.opacity = `${1}`;
    page.style.transform = `translateX(${0})`;

    SliderLeftMenu('reshombtn')
    SliderLeftMenu('resedubtn')
    SliderLeftMenu('resexpbtn')
    SliderLeftMenu('resprobtn')
    SliderRightMenu('resachbtn')
    SliderRightMenu('rescerbtn')
    SliderRightMenu('resconbtn')
    const btn = document.getElementById("resskibtn");
    btn.style.display = "block";
    btn.style.opacity = `${1}`;
    btn.style.transform = `translateX(${0}px)`;
}



function Achievementsbtn() {
    ToggleBtn();
    SliderLeft("homepage")
    SliderLeft("educationpage")
    SliderLeft("experiencepage");
    SliderLeft("projectspage");
    SliderLeft("skillspage");
    SliderRight("certificationspage");
    SliderRight("contactpage");

    const page = document.getElementById("achievementspage");
    page.style.display = "block";
    page.style.opacity = `${1}`;
    page.style.transform = `translateX(${0})`;

    SliderLeftMenu('reshombtn')
    SliderLeftMenu('resedubtn')
    SliderLeftMenu('resexpbtn')
    SliderLeftMenu('resprobtn')
    SliderLeftMenu('resskibtn')
    SliderRightMenu('rescerbtn')
    SliderRightMenu('resconbtn')
    const btn = document.getElementById("resachbtn");
    btn.style.display = "block";
    btn.style.opacity = `${1}`;
    btn.style.transform = `translateX(${0}px)`;
}

function Certificationsbtn() {
    ToggleBtn();
    SliderLeft("homepage")
    SliderLeft("educationpage")
    SliderLeft("experiencepage");
    SliderLeft("projectspage");
    SliderLeft("skillspage");
    SliderLeft("achievementspage");
    SliderRight("contactpage");

    const page = document.getElementById("certificationspage");
    page.style.display = "block";
    page.style.opacity = `${1}`;
    page.style.transform = `translateX(${0})`;

    SliderLeftMenu('reshombtn')
    SliderLeftMenu('resedubtn')
    SliderLeftMenu('resexpbtn')
    SliderLeftMenu('resprobtn')
    SliderLeftMenu('resskibtn')
    SliderLeftMenu('resachbtn')
    SliderRightMenu('resconbtn')
    const btn = document.getElementById("rescerbtn");
    btn.style.display = "block";
    btn.style.opacity = `${1}`;
    btn.style.transform = `translateX(${0}px)`;

}

function Contactbtnres() {
    ToggleBtn();
    SliderLeft("homepage")
    SliderLeft("educationpage")
    SliderLeft("experiencepage");
    SliderLeft("projectspage");
    SliderLeft("skillspage");
    SliderLeft("achievementspage");
    SliderLeft("certificationspage");

    const page = document.getElementById("contactpage");
    page.style.display = "block";
    page.style.opacity = `${1}`;
    page.style.transform = `translateX(${0})`;

    SliderLeftMenu('reshombtn')
    SliderLeftMenu('resedubtn')
    SliderLeftMenu('resexpbtn')
    SliderLeftMenu('resprobtn')
    SliderLeftMenu('resskibtn')
    SliderLeftMenu('resachbtn')
    SliderLeftMenu('rescerbtn')
    const btn = document.getElementById("resconbtn");
    btn.style.display = "block";
    btn.style.opacity = `${1}`;
    btn.style.transform = `translateX(${0}px)`;

}

export { Homebtn, Educationbtn, Experiencebtn, Projectsbtn, Skillsbtn, Certificationsbtn, Achievementsbtn, Contactbtnres };