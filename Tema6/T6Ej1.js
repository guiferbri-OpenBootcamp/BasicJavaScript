let list = ["Pan", "Leche", "Huevos", "Tomate", "Queso"];
list.push("Aceite de Girasol");
console.log(list);
list.pop();
console.log(list);
let movie1 = {
    title: "Gladiator",
    director: "Ridley Scott",
    year: 2000
}
let movie2 = {
    title: "El rey león",
    director: "Rob Minkoff",
    year: 1994
}
let movie3 = {
    title: "Eduardo Manostijeras",
    director: "Tim Burton",
    year: 1991
}
let movies = [movie1, movie2, movie3];
console.log(movies);
let moviesFilter = movies.filter(movie => movie.year >= 1993);
console.log(moviesFilter);
let moviesDirMap = movies.map(movie => {
    return movie.director;
});
console.log(moviesDirMap);
let moviesTitMap = movies.map(movie => {
    return movie.title;
});
console.log(moviesTitMap);
let moviesDirTit = moviesDirMap.concat(moviesTitMap);
console.log(moviesDirTit);
let moviesDirTitProp = [...moviesDirMap, ...moviesTitMap];
console.log(moviesDirTitProp);