class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    // ... your code goes here
    return this.queueControl.length < this.MAX_SIZE

  }

  isEmpty() {
    // ... your code goes here
    return this.queueControl.length <= 0
  }

  enqueue(item) {
    // ... your code goes here
    if ( !this.canEnqueue() ) throw new Error("QUEUE_OVERFLOW")
    //    this.queueControl.push(item)
    this.queueControl.unshift(item)
    return this.queueControl;
  }

  dequeue() {
    // ... your code goes here
    if ( this.isEmpty() ) throw new Error("QUEUE_UNDERFLOW")
    //    let lastItem = this.queueControl.shift()
    let lastItem = this.queueControl.pop()
    return lastItem;

  }

  display() {
    // ... your code goes here
    return this.queueControl;
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
