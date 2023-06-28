class Person {
    constructor(name, lastname){
        this.name = name
        this.lastname = lastname
      
    }
}
const diego = new Person('diego' , 'ray')
const maria = new Person('maria' , 'blalbla')

//relacion asociacion
maria.parent = diego;

console.log(maria)
console.log(diego)