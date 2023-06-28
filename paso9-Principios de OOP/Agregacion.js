const company ={
    name:'HIPER LIBERTAD',
    empleados: []
}


class Person {
    constructor(name, lastname){
        this.name = name
        this.lastname = lastname
      
    }
}
const diego = new Person('diego' , 'ray')
const maria = new Person('maria' , 'blalbla')

company.empleados.push(diego)
company.empleados.push(maria)


console.log(maria)
console.log(diego)

console.log(company)