const user1 ={
    name:"Joe",
    lastname: "Black",
    edad: 38,
    showFullName(params) {
        return `${this.name} ${this.lastname}`
    }

}
//Constructor nos permite crear objectos
function Person(params) {
    this.name = ""
    this.lastname = ""
    this.edad = 0
    this.showFullName = function Person(params) {
        return `${this.name} ${this.lastname}`
    }
}
const user2 = new Person()
user2.name = "diego"
user2.lastname = "Gol"
user2.edad = 38
console.log(user2.showFullName())

const user3 = new Person()
user3.name = "camila"
user3.lastname = "Carreras"
console.log(user3.showFullName())

const user4 = new Person()
const user5 = new Person()

console.log(user3, user4, user5)

console.log(user3)
console.log(user4)
console.log(user5)