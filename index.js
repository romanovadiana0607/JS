// 1
function hepotenuse (a,b){
   return (Math.sqrt(a) + Math.sqrt(b)) * 2;
}
console.log(hepotenuse(4,9))

//2

function randomNumber(){
 const nums =[]
   let minNum = 0;
   let maxNum = 1;
   for(let i = minNum; i<= maxNum; i++){
   nums.push(i)
   }
   return Math.floor(Math.random() * nums.length)
}
console.log(randomNumber())

//1
const myArr = [1,2,3,4]
function reverseArray(array){
    return array.reverse();
}
console.log(reverseArray(myArr))

2  
const myArray = [1,2,3,4,5,6];

function sumOfEvenNums(array){
    const evenNums = array.filter(number => number % 2 === 0);
   const sum = evenNums.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
   return sum
   
}
console.log(sumOfEvenNums(myArray))

//3
const newArr = [" 1","2","3","4 "]
function removeSpaces (array) {
   const trimSpaces = array.map(element => {
    return element.trim(0,3)
   })
   return trimSpaces
}
console.log(removeSpaces(newArr))

//1

function multiply(a){
    for(let i =1; i <= 10 ; i++){
        const outcome = a * i;
        console.log(`${a} * ${i} = ${outcome}`)
    }
}
console.log(multiply(6));

//2
const numbersArray= [3, 3, 7, 7, 4, 7, 5];
function findUniqueNumbers(array) {
    const uniqueNumbers = [];
  
    for (let i = 0; i < array.length; i++) {
      const currentNumber = array[i];
  
      if (!uniqueNumbers.includes(currentNumber)) {
        uniqueNumbers.push(currentNumber);
      }
    }
  
    return uniqueNumbers;
  }
  console.log(findUniqueNumbers(numbersArray));

  //3

  const stringsArr = ["plane", "car", "milk", "kitchen"];
  function getLongestString(array) {
    let longestString = "";
  
    for (let i = 0; i < array.length; i++) {
      const currentString = array[i];
  
      if (currentString.length > longestString.length) {
        longestString = currentString;
      }
    }
  
    return longestString;
  }
  console.log(getLongestString(stringsArr));

  //4

  const myNnumbersArray = [1, 2, 3, 4, 5];
  function squareNumbersOfArray(array) {
    const squaredArray = [];
  
    for (let i = 0; i < array.length; i++) {
      const squaredNumber = array[i] ** 2;
      squaredArray.push(squaredNumber);
    }
  
    return squaredArray;
  }

  console.log(squareNumbersOfArray(myNnumbersArray)); 

  //5

  const myStringsArr = ["Godbye", "HELLO", "gummyBear"];
  function changeToLowerCase(array) {
    const lowerCaseArray = [];
  
    for (let i = 0; i < array.length; i++) {
      const lowerCaseString = array[i].toLowerCase();
      lowerCaseArray.push(lowerCaseString);
    }
  
    return lowerCaseArray;
  }
  


  console.log(changeToLowerCase(myStringsArr)); 
  

  //6
  const newNumArr = [1, 2, 3, 4];

  function calculateAverage(array) {
    let sum = 0;
  
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
  
    const average = sum / array.length;
    return average;
  }
  
  console.log(calculateAverage(newNumArr));