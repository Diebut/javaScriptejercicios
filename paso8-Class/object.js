// function Person(params) {
//     this.name = ''
//     this.lastname = ''
// }

class Person {
    constructor(name, lastname){
        this.name = name
        this.lastname = lastname
        return{
            x:'someting'
        }
    }
    saludar(){
        return `Hola mi nombre es:  ${this.name} ${this.lastname}`
    }
}

const user = new Person('Diegol', 'Gool')
const user2 = new Person('jose', 'pancho')

console.log(user)
console.log(user2)
console.log(Person.prototype)