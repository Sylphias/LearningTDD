function fizzbuzz(number){
    if(isNaN(number)){
        throw new Error('Not a number!');
    }
    let output = number%3==0?'Fizz':'';
    output+= number%5==0?'Buzz':'';
    if(output.length == 0){ return number; }
    return output;
}
module.exports = {fizzbuzz};
