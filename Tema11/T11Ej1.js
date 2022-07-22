class Estudiante {
    name = "Guiomar";
    subjects = ["Javascript", "HTML", "CSS"];
    obtenDatos() {
        return {
            name: this.name,
            subjects: this.subjects
        }
    }
}

let student = new Estudiante();
console.log(student.obtenDatos());