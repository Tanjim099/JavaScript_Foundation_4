function Student(n){
    this.name = n;
}
Student.prototype.printDetails = function(){
    console.log(`Hello my name is ${this.name}`)
}

const student1 = new Student("Tanjim");
student1.printDetails();