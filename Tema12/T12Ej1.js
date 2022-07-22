function fun(num) {
    if (num === 1) {
        return [1]
    }
    if (num === 2) {
        return [1]
    }
    var result = [1,1];
    for (i=2; i < num; i++) {
        let fib = result[i-2] + result[i-1];
        result.push(fib);
    }
    return result;
}
console.log(fun(6));