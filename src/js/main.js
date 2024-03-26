//knapp variabler
var saveBtnEl = document.getElementById("saveBtn");
var deleteBtnEl = document.getElementById("deleteBtn");
//input variabler 
var courseCode = document.getElementById("code");
var courseName = document.getElementById("name");
var courseLink = document.getElementById("link");
var courseProg = document.getElementById("progression");
console.log(courseCode, courseLink, courseName, courseProg);
//div variabel
var courseListEl = document.getElementById("courseList");
//eventlyssnare o funktion
saveBtnEl.addEventListener("click", function () {
    var codeInput = courseCode.value;
    var nameInput = courseName.value;
    var linkInput = courseLink.value;
    var progInput = courseProg.value;
    var newInfo = {
        code: codeInput,
        name: nameInput,
        link: linkInput,
        progression: progInput
    };
    if (codeInput === "" || nameInput === "" || linkInput === "" || progInput === "") {
        alert("Fyll i alla fält");
    }
    else {
        courseListEl.innerHTML =
            "<div class= \"course-container\">\n        <h3>".concat(nameInput, "</h3>\n        <p>Kurskod: ").concat(codeInput, "</p>\n        <p>Kursl\u00E4nk: ").concat(linkInput, "</p>\n        <p>Progression: ").concat(progInput, "</p>\n        </div>\n        ");
    }
    localStorage.setItem("newInfo", JSON.stringify(newInfo));
});
window.onload = function () {
    var storedCourse = localStorage.getItem("newInfo");
    if (storedCourse) {
        // Parse JSON string back to an object
        var parsedData = JSON.parse(storedCourse);
        courseListEl.innerHTML =
            "<div class= \"course-container\">\n        <h3>".concat(parsedData.name, "</h3>\n        <p>Kurskod: ").concat(parsedData.code, "</p>\n        <p>Kursl\u00E4nk: ").concat(parsedData.link, "</p>\n        <p>Progression: ").concat(parsedData.progression, "</p>\n        </div>\n        ");
    }
    else {
        console.log("No data found in localStorage.");
    }
};
