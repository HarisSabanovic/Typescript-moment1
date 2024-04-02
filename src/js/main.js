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
        var courseArray = JSON.parse(localStorage.getItem("courseArray") || "[]");
        //kontrollera ifall kursen redan finns i array
        var existingCourseIndex = -1;
        for (var i = 0; i < courseArray.length; i++) {
            if (courseArray[i].code === codeInput) {
                existingCourseIndex = i;
                break;
            }
        }
        if (existingCourseIndex !== -1) {
            var writeOver = confirm("Kursen finns redan, vill du ersätta den?");
            if (writeOver) {
                courseArray[existingCourseIndex] = newInfo;
            }
            else {
                return;
            }
        }
        else {
            courseArray.push(newInfo);
        }
        var arrayJson = JSON.stringify(courseArray);
        localStorage.setItem("courseArray", arrayJson);
        courseListEl.innerHTML = "";
        courseArray.forEach(function (course) {
            courseListEl.innerHTML +=
                "<div class= \"course-container\">\n            <h3>".concat(course.name, "</h3>\n            <p>Kurskod: ").concat(course.code, "</p>\n            <p>Kursl\u00E4nk: ").concat(course.link, "</p>\n            <p>Progression: ").concat(course.progression, "</p>\n            </div>");
        });
    }
    localStorage.setItem("newInfo", JSON.stringify(newInfo));
});
window.onload = function () {
    var storedCourse = localStorage.getItem("courseArray");
    if (storedCourse) {
        // Parse JSON string back to an object
        var parsedData = JSON.parse(storedCourse);
        parsedData.forEach(function (course) {
            courseListEl.innerHTML +=
                "<div class= \"course-container\">\n        <h3>".concat(course.name, "</h3>\n        <p>Kurskod: ").concat(course.code, "</p>\n        <p>Kursl\u00E4nk: ").concat(course.link, "</p>\n        <p>Progression: ").concat(course.progression, "</p>\n        </div>\n        ");
        });
    }
    else {
        console.log("No data found in localStorage.");
    }
};
deleteBtnEl.addEventListener("click", function () {
    courseListEl.innerHTML = "";
    localStorage.clear();
});
