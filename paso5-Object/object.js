const person = new Object()
console.log(person)

const person2 = {}
    console.log(person2.constructor === Object)

const string = new Object("holaaa todooooss")
string.name = "Special String"
string.test = function (params) {
    return this + "test"
}
console.log(string.name)    

//otra forma de acceder a valores y propiedades
const user={
    name: "nananana",
    lastanme: "dmapofmaf",
    age: 41,
    showFullName(){
        return this.name;
    }
}
console.log(Object.values(user))