var number = 10;
var aux = 10;
var result = 1;
while(aux <= number) {
    if (aux == 0) {
        break;
    }
    result = aux * result;
    aux--;
}
console.log(result)