class Empolyee{
    constructor(n, p, s){
        this.name = n;
        this.position = p;
        this.salary = s;
    }
    getSalary(){
        return this.salary;
    }
}
const empoyee1 = new Empolyee("Raj", "Manager", 35000);
console.log(empoyee1.getSalary());