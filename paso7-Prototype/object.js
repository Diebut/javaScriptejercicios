function Person(name, lastname) {
    this.name = name
    this.lastname= lastname
    this.displayName = function name(params) {
        return `${this.name} ${this.lastname}` 
    }
}
const jhon = new Person('John', 'Block')
const pedro = new Person('pedro', 'Rossi')
const maria = new Person('maria', 'perez')
const jose = new Person('jose', 'efe')



Person.prototype.saludar = function (params) {
    return `Hola mi Nombre es: ${this.name}`
}

Person.prototype.age = 100

console.log(jose.age)
console.log(maria)
console.log(pedro)
console.log(jhon)

const s = new String("Hello world")

String.prototype.concatTest = function(params) {
    return this + " test ";
}

console.log("My name is Jesus".concatTest()) // es lo mismo
console.log(s.concatTest())

//el prototype hace refencia a un contructor