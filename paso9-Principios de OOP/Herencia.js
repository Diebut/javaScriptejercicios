// function Person(params) {
//     this.name = ''
//     this.lastname = ''
// }

// function Programmer(params) {
//     this.lenguaje= ''
// }

// Programmer.prototype = new Person()
//  console.log(Programmer)
//  console.log(Person)

//  const person = new Person()
//  person.name = 'mari'
//  person.name = 'gise'
//  console.log(person)

//  const programer = new Programmer()
//  programer.name = 'vivi'
//  programer.lastname = 'fueteee'
//  programer.lenguaje = 'Java'

//  console.log(programer)


class Person {
    constructor(name, lastname){
        this.name = name
        this.lastname = lastname
        this.age = null
    }
}

 class Programmer extends Person{
    constructor(name, lastname, lenguaje){
        super(name, lastname);
        this.lenguaje = lenguaje
    }
 }

 const person = new Person('viki', 'perez')
console.log(person)

 const programer = new Programmer('sole', 'cartagena', 'Python')
 console.log(programer)