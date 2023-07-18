

// Add Front
// Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;              
    }
}

class SLL {
  constructor() {
    this.head = null; 
  }

  addFront(value) {
    const newNode = new Node(value)
    newNode.next = this.head
    this.head = newNode
    return this.head
  }

  removeFront() {
    if (!this.head) {
        return null
    }
    let runner = this.head
    this.head = runner.next
    while (runner.next){
        runner.next = runner.next.next
    }
    return this.head
  }

  front(){
    if (!this.head) {
        return null
    }
    return this.head.data
  }

  display () {
    if (!this.head) {
        return null
    }
    let runner = this.head
    let values = `${runner.data}`
    while (runner.next){
        values += `, ${runner.next.data}`
        runner = runner.next
    }
    return values
  }
}

// copy
// Examples:

let SLL1 = new SLL()
SLL1.addFront(18)
SLL1.addFront(5)
console.log(SLL1.addFront(73), "!@#$@!#$")
// SLL1.addFront(18) => Node { data: 18, next: null }
// SLL1.addFront(5) => Node { data: 5, next: Node { data: 18, next: null } }
// SLL1.addFront(73) => Node { data: 73, next: Node { data: 5, next: Node { data: 18, next: null } } }

// Remove Front
// Write a method to remove the head node and return the new list head node. If the list is empty, return null.

console.log(SLL1.removeFront())
console.log(SLL1.removeFront())
// SLL1.removeFront() => Node { data: 5, next: Node { data: 18, next: null } }
// SLL1.removeFront() => Node { data: 18, next: null }

// Front
// Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.

console.log(SLL1.front())
console.log(SLL1.removeFront())
console.log(SLL1.front())

// copy
// Examples:

// SLL1.front() => 18
// SLL1.removeFront() => null
// SLL1.front() => null

// Display
// Use classes, attributes, and methods in the JavaScript language for this challenge. Use only a single JavaScript file for this assignment, it may be the same from the Fronts assignment. All examples are done in order, starting with a new instance of the SLL class.

// Create display() that uses a while loop and a runner to return a string containing all list values. Build what you wish console.log(myList) did!

console.log(SLL1.addFront(76))
console.log(SLL1.addFront(2))
console.log(SLL1.display())
console.log(SLL1.addFront(11.41))
console.log(SLL1.display())
// SLL1 = new SLL()
// SLL1.addFront(76) => Node { data: 76, next: null }
// SLL1.addFront(2) => Node { data: 2, next: Node { data: 76, next: null } }
// SLL1.display() => "2, 76"
// SLL1.addFront(11.41) => Node { data: 11.41, next: Node { data: 2, next: Node { data: 76, next: null } } }
// SLL1.display() => "11.41, 2, 76"