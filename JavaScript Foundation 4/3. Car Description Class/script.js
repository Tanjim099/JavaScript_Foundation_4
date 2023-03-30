class car{
    constructor(c, m, y){
        this.company = c;
        this.model = m;
        this.year = y;
    }
    getDescription(){
        return `This is a ${this.year} ${this.company} ${this.model}`;
    }
}

const myCar = new car("Toyota", "Corolla", 2022);
console.log(myCar.getDescription());