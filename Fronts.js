

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