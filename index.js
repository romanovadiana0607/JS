//1
function getFactorial(num) {

    if (num === 0 || num === 1) {
      return 1;
    }
    return num * getFactorial(num - 1);
  }
  
 
  console.log(getFactorial(13));

  //2
  function checkForPalindrome(string) {

    if (string.length === 0 || string.length === 1) {
      return true;
    }
    
    
    if (string[0] === string[string.length - 1]) {
      return checkForPalindrome(string.slice(1, string.length - 1));
    }
    
    
    return false;
  }
  

  console.log(checkForPalindrome("cat")); 

  //3 

  function greatestCommonDivisor(a, b) {
    if (b === 0) {
      return a;
    } else {
      return greatestCommonDivisor(b, a % b);
    }
  }

  const number1 = 24;
  const number2 = 6;
  const dividor = greatestCommonDivisor(number1, number2);
  console.log(dividor); 
  
  //1

  const numbers = [1, 2, 3, 4, 5];
  function increaseValuesBelowAverage(arr) {
    
    const sum = arr.reduce((total, value) => total + value, 0);
    const average = sum / arr.length;
  
   
    const result = arr.map((value) => {
      if (value < average) {
        return value + 1;
      }
      return value;
    });
  
    return result;
  }
  
  const increasedNumbers = increaseValuesBelowAverage(numbers);
  console.log(increasedNumbers); 
  

  //2
  function findLongestWord(sentence) {

    const words = sentence.split(" ");
    let longestWord = "";
    let longestWordLength = 0;
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (word.length > longestWordLength) {
        longestWord = word;
        longestWordLength = word.length;
      }
    }
    return {
      word: longestWord,
      length: longestWordLength
    };
  }

  const sentence = "Hello my name is Diana";
  const result = findLongestWord(sentence);
  console.log(result); 
  
  //3
  function numbersToLetters(array) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  
    const result = array.map((number) => {
      if (number >= 1 && number <= 26) {
        return alphabet[number - 1];
      }
      return null;
    });
  
    return result;
  }
  

  const numArray = [1, 2, 3, 4, 5];
  const letters = numbersToLetters(numArray);
  console.log(letters);
  

  //4
  function filterRepeatedElements(arr) {
    const uniqueElements = [];
    const repeatedElements = [];
  
    arr.forEach((element) => {
      if (uniqueElements.includes(element)) {
        if (!repeatedElements.includes(element)) {
          repeatedElements.push(element);
        }
      } else {
        uniqueElements.push(element);
      }
    });
  
    const filteredArray = arr.filter((element) => !repeatedElements.includes(element));
    return filteredArray;
  }
  

  const myArray = [1, 2, 3, 2, 4, 3, 5, 6, 5];
  const filteredNumbers = filterRepeatedElements(myArray);
  console.log(filteredNumbers); 
  
  //5
  function generateFibonacciArray(length, firstElement, secondElement) {
    const fibonacciArray = [firstElement, secondElement];
  
    for (let i = 2; i < length; i++) {
      const previousElement1 = fibonacciArray[i - 1];
      const previousElement2 = fibonacciArray[i - 2];
      const newElement = previousElement1 + previousElement2;
      fibonacciArray.push(newElement);
    }
  
    return fibonacciArray;
  }

  const fibonacci = generateFibonacciArray(10, 0, 1);
  console.log(fibonacci);

  //6 - не знаю :(
  


  