//1 TASK

//Sub Task1

const favoriteAnimal = {
    name: "Leo",
    species: "Lion",
    age: 5,
    characteristics: ["Big", "Strong", "Powerful"]
  };
  
  //Sub Task2
  function displayAnimalProperties(animal) {
    for (let property in animal) {
      console.log(property + ": " + animal[property]);
    }
  }
  
  // Sub Task3
  function changePropertyValue(animal, property, newValue) {
    if (animal.hasOwnProperty(property)) {
      animal[property] = newValue;
      console.log("The value of '" + property + "' has been updated to: " + newValue);
    } else {
      console.log("Property '" + property + "' does not exist in the object.");
    }
  }
  

  console.log(displayAnimalProperties(favoriteAnimal));
  console.log(changePropertyValue(favoriteAnimal, "age", 6));
  console.log(displayAnimalProperties(favoriteAnimal));


  //2 TASK

//Sub Task1
const machine1 = {
    make: "Apple",
    model: "MacBook Pro",
    year: 2021,
    specifications: {
      cpu: "Intel Core i7",
      ram: "16GB",
      storage: "512GB SSD"
    }
  };
  
  const machine2 = {
    make: "Dell",
    model: "XPS 15",
    year: 2022,
    specifications: {
      cpu: "Intel Core i9",
      ram: "32GB",
      storage: "1TB SSD"
    }
  };
  
  // Sub Task2
  function compareObjects(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
  
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    for (let key of keys1) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  
    return true;
  }
  
  // Sub Task3
  function removeProperty(obj, property) {
    if (obj.hasOwnProperty(property)) {
      delete obj[property];
      console.log("Property '" + property + "' has been removed from the object.");
    } else {
      console.log("Property '" + property + "' does not exist in the object.");
    }
  }
  

  const isSame = compareObjects(machine1, machine2);
  console.log("Are the machines the same?", isSame);
  removeProperty(machine1, "year");
  console.log(machine1);
  

  // 3 TASK
//Sub Task1
const user = {
    name: "Diana Romanova",
    email: "romanovadi0607@gmail.com",
    password: "1122334455",
    age: 19,
    occupation: "Barista"
  };
  
  //Sub Task2
  function checkPassword(userObj, enteredPassword) {
    return userObj.password === enteredPassword;
  }
  
  // Sub Task3
  function displayUserProperties(userObj) {
    for (let property in userObj) {
      console.log(property + ": " + userObj[property]);
    }
  }
  

  const enteredPassword = "password123";
  const passwordMatches = checkPassword(user, enteredPassword);
  console.log("Password matches:", passwordMatches);
  console.log("User Properties:");
  displayUserProperties(user);
  

  // 4 TASK
  //Sub Task 1
const electronicStore = {
    name: "Apple",
    address: "Pushkinska 25B",
    products: [
      {
        name: "Iphone",
        price: 40000,
        characteristics: "5.5-inch display, 64GB storage"
      },
      {
        name: "Macbook",
        price: 70000,
        characteristics: "15.6-inch display, 6GB"
      },
      {
        name: "TV",
        price: 30000,
        characteristics: "32-inch screen, Black color"
      }
    ]
  };
  
  // Sub Task2
  function sortProductsByPrice(store) {
    store.products.sort((a, b) => b.price - a.price);
  }
  

  console.log("Initial products:");
  console.log(electronicStore.products);
  sortProductsByPrice(electronicStore);
  console.log("Sorted products:");
  console.log(electronicStore.products);
  
  
  //5 Task
  // SubTask 1
const postOffice = {
    address: "123 Main Street",
    hoursOfOperation: {
      Monday: "9:00 AM - 5:00 PM",
      Tuesday: "9:00 AM - 5:00 PM",
      Wednesday: "9:00 AM - 5:00 PM",
      Thursday: "9:00 AM - 5:00 PM",
      Friday: "9:00 AM - 6:00 PM",
      Saturday: "10:00 AM - 2:00 PM",
      Sunday: "Closed"
    },
    packages: [
      { trackingNumber: "ABC123", recipient: "John Doe" },
      { trackingNumber: "DEF456", recipient: "Jane Smith" },
      { trackingNumber: "GHI789", recipient: "Mike Johnson" }
    ]
  };
  
  // SubTask 2
  function isPostOfficeOpen(postOfficeObj) {
    const currentDate = new Date();
    const currentDay = currentDate.toLocaleString("en-US", { weekday: "long" });
    const currentTime = currentDate.getHours() + ":" + currentDate.getMinutes();
  
    const hours = postOfficeObj.hoursOfOperation[currentDay];
    if (hours === "Closed") {
      return false;
    }
  
    const [start, end] = hours.split(" - ");
    if (currentTime >= start && currentTime <= end) {
      return true;
    } else {
      return false;
    }
  }
  

  console.log("Post Office Details:");
  console.log("Address:", postOffice.address);
  console.log("Hours of Operation:", postOffice.hoursOfOperation);
  console.log("Packages:", postOffice.packages);
  const isOpen = isPostOfficeOpen(postOffice);
  console.log("Is the Post Office open at the current time?", isOpen);
  
  
