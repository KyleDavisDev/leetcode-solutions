// Author: Kyle Bonar
// Github: github.com/KyleBonar

// Description:
// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
// - push(x) -- Push element x onto stack.
// - pop() -- Removes the element on top of the stack.
// - top() -- Get the top element.
// - getMin() -- Retrieve the minimum element in the stack.

// Example:
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin();   --> Returns -3.
// minStack.pop();
// minStack.top();      --> Returns 0.
// minStack.getMin();   --> Returns -2.

// --------------------------------------------------------

/**
 * @param {number} n
 * @return {boolean}
 */

//With all players playing optimally, the only way to for us to win is for the initial stone count to not be a multiple of 4
/**
 * @constructor
 */
var MinStack = function() {
  this.minStack = [];
  this.stack = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
MinStack.prototype.push = function(x) {
  this.stack.push(x);
  if (
    this.minStack.length === 0 ||
    x <= this.minStack[this.minStack.length - 1]
  ) {
    this.minStack.push(x);
  }
};

/**
 * @returns {void}
 */
MinStack.prototype.pop = function() {
  if (this.stack.length > 0) {
    const num = this.stack.pop();
    if (num === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
  }
  return;
};

/**
 * @returns {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

/**
 * @returns {number}
 */
MinStack.prototype.getMin = function() {
  return this.minStack[this.minStack.length - 1];
};
