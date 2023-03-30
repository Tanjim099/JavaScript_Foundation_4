class Calculator{
    static add(a, b){
        return a + b;
    }
}
const calculator = new Calculator();
const result = Calculator.add(2,3);
console.log(result);