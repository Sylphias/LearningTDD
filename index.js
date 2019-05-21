function fizzbuzz(number){
    let output = number%3==0?'Fizz':'';
    output+= number%5==0?'Buzz':'';
    if(output.length == 0){ return number; }
    return output;
}

console.log(fizzbuzz(9));
console.log(fizzbuzz(20));
console.log(fizzbuzz(23));
console.log(fizzbuzz(30));
