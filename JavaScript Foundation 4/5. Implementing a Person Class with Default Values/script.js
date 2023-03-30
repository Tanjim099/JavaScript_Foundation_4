class Person{
    constructor(n= "Unknown", a=0){
        this.name = n;
        this.age = a;
    }
    getDerails(){
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

const Person1 = new Person("Raj", 26);
const Person2 = new Person();
console.log(Person1.getDerails());
console.log(Person2.getDerails());