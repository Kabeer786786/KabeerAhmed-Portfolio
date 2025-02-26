function ToggleBtn() {
    const menubtns = document.querySelectorAll(".menubtns");
    menubtns.forEach(block => {
        block.style.display = "none";
    });
    const cards = document.querySelectorAll(".card");
    cards.forEach(block => {
        block.style.width = "45px";
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

    const btn = document.getElementById("homeinfo");
    btn.style.display = "block";
    btn.style.opacity = `${1}`;
    btn.style.transform = `translateY(${3}px)`;

    const btn2 = document.getElementById("home");
    btn2.style.width = "270px";   
}

function Educationbtn() {
    ToggleBtn();
    SliderLeft("homeinfo")
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

    const btn = document.getElementById("eduinfo");
    btn.style.display = "block";
    btn.style.opacity = `${1}`;
    btn.style.transform = `translateY(${3}px)`;

    const btn2 = document.getElementById("education");
    btn2.style.width = "270px";

}

function Experiencebtn() {
    ToggleBtn();
    SliderLeft("homeinfo")
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

    const btn = document.getElementById("expinfo");
    btn.style.display = "block";
    btn.style.opacity = `${1}`;
    btn.style.transform = `translateY(${3}px)`;

    const btn2 = document.getElementById("experience");
    btn2.style.width = "270px";

}

function Projectsbtn() {
    ToggleBtn();
    SliderLeft("homeinfo")
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

    const btn = document.getElementById("proinfo");
    btn.style.display = "block";
    btn.style.opacity = `${1}`;
    btn.style.transform = `translateY(${3}px)`;

    const btn2 = document.getElementById("projects");
    btn2.style.width = "270px";

}

function Skillsbtn() {
    ToggleBtn();
    SliderLeft("homeinfo")
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

    const btn = document.getElementById("skiinfo");
    btn.style.display = "block";
    btn.style.opacity = `${1}`;
    btn.style.transform = `translateY(${3}px)`;

    const btn2 = document.getElementById("skills");
    btn2.style.width = "270px";

}



function Achievementsbtn() {
    ToggleBtn();
    SliderLeft("homeinfo")
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

    const btn = document.getElementById("achinfo");
    btn.style.display = "block";
    btn.style.opacity = `${1}`;
    btn.style.transform = `translateY(${3}px)`;

    const btn2 = document.getElementById("achievements");
    btn2.style.width = "270px";

}

function Certificationsbtn() {
    ToggleBtn();
    SliderLeft("homeinfo")
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

    const btn = document.getElementById("cerinfo");
    btn.style.display = "block";
    btn.style.opacity = `${1}`;
    btn.style.transform = `translateY(${3}px)`;

    const btn2 = document.getElementById("certifications");
    btn2.style.width = "270px";

}

function Contactbtn() {
    ToggleBtn();
    SliderLeft("homeinfo")
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

    const btn = document.getElementById("coninfo");
    btn.style.display = "block";
    btn.style.opacity = `${1}`;
    btn.style.transform = `translateY(${3}px)`;

    const btn2 = document.getElementById("contact");
    btn2.style.width = "270px";

}

export { Homebtn, Educationbtn, Experiencebtn, Projectsbtn, Skillsbtn, Certificationsbtn, Achievementsbtn, Contactbtn };