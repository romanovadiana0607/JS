//1
class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  
    discount(discountValue) {
      const discountedPrice = this.price - discountValue;
      console.log(`Discounted price for ${this.name}: $${discountedPrice}`);
    }
  }
  const product = new Product("Phone", 1000);
  product.discount(200);

  //2
  class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    calculateArea() {
      return this.width * this.height;
    }
  
    calculatePerimeter() {
      return 2 * (this.width + this.height);
    }
  }
  
  const rectangle = new Rectangle(5, 10);
  console.log("Area:", rectangle.calculateArea());
  console.log("Perimeter:", rectangle.calculatePerimeter());

  //3
  class Client {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }
  
    validateEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValidEmail = emailRegex.test(this.email);
      console.log(`Email "${this.email}" is ${isValidEmail ? "valid" : "invalid"}`);
    }
  }
  const client = new Client("John Doe", "johndoe@example.com");
  client.validateEmail();
  
  const client2 = new Client("Jane Smith", "jane.smith@example");
  client2.validateEmail();
  

//4

class Transport {
    constructor(brand, model) {
      this.brand = brand;
      this.model = model;
    }
  
    showInfo() {
      console.log(`Brand: ${this.brand}`);
      console.log(`Model: ${this.model}`);
    }
  }
  
  class Car extends Transport {
    constructor(brand, model, year) {
      super(brand, model);
      this.year = year;
    }
  
    showInfo() {
      super.showInfo();
      console.log(`Year: ${this.year}`);
    }
  }
  
  class Motorcycle extends Transport {
    constructor(brand, model, engineCapacity) {
      super(brand, model);
      this.engineCapacity = engineCapacity;
    }
  
    showInfo() {
      super.showInfo();
      console.log(`Engine Capacity: ${this.engineCapacity} cc`);
    }
  }
  const car = new Car("Toyota", "Camry", 2022);
  car.showInfo();
  
  console.log("__________");
  
  const motorcycle = new Motorcycle("Honda", "CBR1000RR", 1000);
  motorcycle.showInfo();
  

  //5 Вы забыли 5 номер

  //6
  class Figure {
    constructor() {}
  
    calculateArea() {
      throw new Error("Method 'calculateArea' must be implemented.");
    }
  
    calculatePerimeter() {
      throw new Error("Method 'calculatePerimeter' must be implemented.");
    }
  
    showInfo() {
      console.log(`Figure: ${this.constructor.name}`);
      console.log(`Area: ${this.calculateArea()}`);
      console.log(`Perimeter: ${this.calculatePerimeter()}`);
    }
  }
  
  class Rectangle extends Figure {
    constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
    }
  
    calculateArea() {
      return this.width * this.height;
    }
  
    calculatePerimeter() {
      return 2 * (this.width + this.height);
    }
  }
  
  class Circle extends Figure {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    calculateArea() {
      return Math.PI * this.radius * this.radius;
    }
  
    calculatePerimeter() {
      return 2 * Math.PI * this.radius;
    }
  }

  const recktangle = new Rectangle(5, 10);
  rectangle.showInfo();
  
  console.log("_________");
  
  const circle = new Circle(7);
  circle.showInfo();
  

  