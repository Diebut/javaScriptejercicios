class Person{
    constructor(name, lastname){
        this.name= name
        this.lastname=lastname
    }
}

class Programmer extends Person{
    constructor(lenguaje, name, lastname){
        super(name, lastname)
        this.lenguaje = lenguaje
    }
}

const diego = new Person('diego', 'cool')
const pepe = new Programmer('JavaScript', 'pepe', 'tatata')

console.log(diego)
console.log(pepe)

function writeFullName(p) {
    console.log(p.name + " " + p.lastname)
}

writeFullName(diego)
writeFullName(pepe)