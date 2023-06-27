const user ={
    name:"Joe",
    lastname: "Black",
    edad: 38,
    showFullName(params) {
        return this.name + " " + this.lastname
    }

}
//console.log(user)
console.log(user.showFullName())

const account ={
    number: "18416313186131",
    amount: 100,
    deposit(cantidad){
        this.amount = this.amount + cantidad //actualizando el monto
        
    },
    retirar(cantidad){
        this.amount = this.amount - cantidad
    }
}
account.deposit(100)
account.deposit(50)
account.deposit(10)
console.log(account)

account.retirar(10)
account.retirar(200)
console.log(account)
