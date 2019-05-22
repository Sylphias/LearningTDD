const index = require('./index');
const assert = require('assert');


describe('FizzBuzz',()=>{
    it('Should return a value of Fizz if input is a multiple of 3',()=>{
        assert.equal(index.fizzbuzz(21),'Fizz');
    });
    it('Should return a value of Buzz if input is a multiple of 5',()=>{
        assert.equal(index.fizzbuzz(10),'Buzz');
    });
    it('Should return a value of FizzBuzz if input is a multiple of 3 and 5',()=>{
        assert.equal(index.fizzbuzz(15),'FizzBuzz');
    });
    it('Should throw an error if the input is invalid.',()=>{
        assert.throws(()=>{index.fizzbuzz('NAN');},Error,'Not a number!');
    });
});
