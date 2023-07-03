// setTimeout
//1
function printDelayedString(string) {
    setTimeout(() => {
      console.log(string);
    }, 5000); 
  }
  printDelayedString("My name is Diana");

  //2
  function fetchDataFromServer() {
    setTimeout(() => {
      const newData = "New data";
      console.log(newData);

    }, 10000); 
  }
fetchDataFromServer();

//setInterval:
//1

function getTimeLeftUntilEndOfDay() {
    const now = new Date();
    const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
    const timeLeft = endOfDay.getTime() - now.getTime();
  
    const hoursLeft = Math.floor(timeLeft / (1000 * 60 * 60));
    const minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
    console.log(`Time left: ${hoursLeft} hours, ${minutesLeft} min, ${secondsLeft} sec.`);
  }
  
  setInterval(getTimeLeftUntilEndOfDay, 5000);
  
//Date
// 1
function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }
  
  // 2
  function getCurrentDate() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); 
    const year = now.getFullYear();
    return `${day}.${month}.${year}`;
  }
  
  //3
  function getDaysUntilNewYear() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const newYear = new Date(currentYear + 1, 0, 1); 
    const timeLeft = newYear.getTime() - now.getTime();
    const daysLeft = Math.ceil(timeLeft / (1000 * 60 * 60 * 24)); 
    return daysLeft;
  }

  console.log("Time now:", getCurrentTime());
  console.log("Date right now:", getCurrentDate());
  console.log("Days until new year:", getDaysUntilNewYear());
  

  