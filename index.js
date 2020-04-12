// Task number 1. Write a calculator. 

/*let number1 = +prompt('Write any number');
let number2 = +prompt('Write any number again');
let symbol = prompt('Write any of the following: + - * /');


switch(symbol) {
    case '+':
    alert(number1 + number2);
    break;
    case '-':
    alert(number1 - number2);
    break;
    case '*':
    alert(number1 * number2);
    break;
    case '/':
    alert(number1 / number2);
}*/

/*Task number 2. Couldn´t solve this one. I don´t understand why we have
this type of advanced mathematics in the beginning of this course. It doesn't make
any sense to me. It just make me feel bad and ruins my self confidence regarding the course.*/

let number = +prompt('Write any even number');
let sum = 0; 
if (number % 2 === 0) {
    for (let i = 1; i <= number; i++) {
    sum = i * sum; 
    }
    console.log(sum);
}




// Task number 3. 

/*let number = prompt('Write any positive integer');  

if (number >= 0) {
    for (let i = 1; i <= number; i++) {
        document.write('<p>' + i + '...sheep</p>')
    } 
} else {
    document.write('<p>error</p>');
}*/



// Task number 4.

/*let answer;
do {
  answer = prompt('What is 2 + 2 * 2?');
} while (answer != 6);
alert('You answered correctly!');*/
