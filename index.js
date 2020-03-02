//Setting variables. 
var firstNumber = 15;
var secondNumber = 20;
var minus = firstNumber - secondNumber;
var plus = firstNumber + secondNumber;
var divide = firstNumber / secondNumber;
var remainder = secondNumber % firstNumber;
var times = firstNumber * secondNumber;


//this line of code should 15 minus 20 should be -5.
console.log( "15 - 20 = " + minus);
//this line of code should  15 plus 20 should be = 35.
console.log( "15 + 20 = " + plus);
//printing this equation to log , 15 divided by 20. 
console.log( "15 / 20 = " + divide);
//calculating the remainder
console.log( "20 % 15 , reminder = " + remainder);
//this line will multiply first number(15) by second number(20) = 300.
console.log( "15 * 20 = " + times);


//all the equations in one line.
console.log( "Concatination of all variable equations." + minus , plus , divide , remainder , times);
