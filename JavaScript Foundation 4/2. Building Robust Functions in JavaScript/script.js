function getPerson(person){
    try{
        if(!person.name || !person.age){
            throw new Error("Invalid Parameter type");
        }
        
        return `Name: ${person.name}, Age: ${person.age}`;
    }
    catch (error){
        return error.message;
    }
}

const person1 = { name: "Tanjim", age: 20};
console.log(getPerson(person1));

const person2 = { name: "Tanjim"};
console.log(getPerson(person2));