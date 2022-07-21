let me = {
    firstname: "Guiomar",
    lastname: "Bobadilla",
    age: 28,
    high: 1.75,
    isDeveloper: true
};
var age = me.age;
let friend1 = {
    firstname: "Pepito",
    lastname: "Grillo",
    age: 29,
    high: 0.30,
    isDeveloper: false
};
let friend2 = {
    firstname: "Juanito",
    lastname: "Pérez",
    age: 27,
    high: 1.5,
    isDeveloper: true
};
var people = [me, friend1, friend2];
var peopleOrder = people.sort((a, b) => b.age - a.age);
console.log(peopleOrder);