
// interface för en kurs
interface courseInfo {
    code: string;
    name: string;
    progression: string;
    link: string;
}

//knapp variabler
let saveBtnEl = document.getElementById("saveBtn") as HTMLInputElement;
let deleteBtnEl = document.getElementById("deleteBtn") as HTMLInputElement;

//input variabler 
let courseCode = document.getElementById("code") as HTMLInputElement;
let courseName = document.getElementById("name") as HTMLInputElement;
let courseLink = document.getElementById("link") as HTMLInputElement;
let courseProg = document.getElementById("progression") as HTMLInputElement;

console.log(courseCode, courseLink, courseName, courseProg);

//div variabel
let courseListEl = document.getElementById("courseList") as HTMLDivElement;

//eventlyssnare o funktion
saveBtnEl.addEventListener("click", () => {

    const codeInput: string = courseCode.value;
    const nameInput: string = courseName.value;
    const linkInput: string = courseLink.value;
    const progInput: string = courseProg.value;

    const newInfo : courseInfo = {
        code: codeInput,
        name: nameInput,
        link: linkInput,
        progression: progInput
    };

    if(codeInput === "" || nameInput === "" || linkInput === "" || progInput === "") {
        alert("Fyll i alla fält");
    } else {
        courseListEl.innerHTML = 
        `<h3>${nameInput}</h3>
        <p>Kurskod: ${codeInput}</p>
        <p>Kurslänk: ${linkInput}</p>
        <p>Progression: ${progInput}</p>
        `
    }

    localStorage.setItem("newInfo", JSON.stringify(newInfo));
});

window.onload = () => {
    let storedCourse = localStorage.getItem("newinfo");

    if (storedCourse) {
        
    }
}