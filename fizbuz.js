// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

for (let i = 1; i <= 100; i++) {
    //comparer si la valeur de l'argument "i" est divisible par 3 
    //et par 5. ex: 15
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i + ' => FizzBuzz');
    //comparer si la valeur de l'argument "i" est divisible par 3 ou contient 3
  } else if ((i % 3 === 0 ) || i.toString().includes('3')) {
    console.log(i + ' => Fizz');
    //comparer si la valeur de l'argument "i" est divisible par 5 ou contient 5
  } else if (i % 5 === 0 || i.toString().includes('5')) {
    
  } else console.log(i + ' => Buzz');
  //si la valeur de l'argument "i" n'est pas divisible par 3 ou par 5 et ne contient ni 3 ni 5

//   console.log(i + "ok");
}
