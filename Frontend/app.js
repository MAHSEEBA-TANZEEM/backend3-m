let arr = [1,2,3];
arr.sayHello= () => {
    console.log("hello!, i am arr");
}


// factory function
function PersonMaker(name, age) {
    const person = {
        name: name,
        age: age,
        talk() {
            console.log(`Hi, my name is ${this.name}`);
        },
    };
    return person;
}

// new operator Constructors
function Person1(name, age) {
  this.name = name;
  this.age = age;
};

// let p1 = new Person("Arham",23);
// let p2 = new Person("Anas", 21);

// Classes
class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`Hi, my name is ${this.name}`);
    }
}

// let p1 = new Person("Arham",23);
// let p2 = new Person("Anas", 21);

// Inheritance
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`Hi, my name is ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, age, marks) {
        super(name, age);
        this.marks = marks;
    }
}

class Teacher extends Person{
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
}

let stu1 = new Student("adam", 23, 89);
let t1 = new Teacher("Robert", 45, "English");

class Mammal{
    constructor(name) {
        this.name = name;
        this.type = "warm-blooded";
    }
    eat() {
        console.log("I am eating");
    }
}

class Dog extends Mammal {
    constructor(name) {
        super(name);
    }
    bark() {
        console.log("wofff...");
    }
    eat() {
        console.log("dog is eating");
    }
    
}
class Cat extends Mammal{
    constructor(name) {
        super(name);
    }
    meow() {
        console.log("meow....");
    }
}

let dog1 = new Dog("tuffie");
let cat1= new Cat("sheru");