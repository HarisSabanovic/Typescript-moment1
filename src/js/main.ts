
// interface för en kurs
interface courseInfo {
    code: string;
    name: string;
    progression: string;
    syllabus: string;
}

//variabler
let saveBtnEl = document.getElementById("saveBtn") as HTMLInputElement;
let deleteBtnEl = document.getElementById("deleteBtn") as HTMLInputElement;

