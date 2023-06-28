// const company ={
//     name: 'DINO MALL',
//     employees:[],
//     sortEmployees: function(params) {
        
//     }
// }

function Company(name) {
    let employees =[]
    this.name = name
    this.getEmployees = function () {
        return employees
    }
    this.addEmployees = function (employee) {
        employees.push(employee)
    }
}

const comp = new Company('Coca Cola')
const comp2 = new Company('Pepsi')

console.log(comp)
console.log(comp2)

comp.addEmployees({name: 'tania'})
comp2.addEmployees({name: 'marce'})

console.log(comp.getEmployees())
console.log(comp2.getEmployees())