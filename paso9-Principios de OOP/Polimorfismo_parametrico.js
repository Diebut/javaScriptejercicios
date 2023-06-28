function Stack(params) {
    this.items = []
    this.push = function (item) {
        this.items.push(item)
    }
}

const stack = new Stack()
stack.push('sdjfbalfba')

const stack2 = new Stack()
stack2.push(1000)

console.log(stack)
console.log(stack2)