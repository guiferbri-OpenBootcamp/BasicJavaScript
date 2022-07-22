function func1() {
    return true;
}

async function func2() {
    return setTimeout(
        () => console.log("Hola soy una promesa") , 5000
    );
}

function* func3() {
    let id = 0;
    while(true) {
        id = id + 2;
        yield id;
    }
}
const gen = func3();
console.log(gen.next());