// Author: Kyle Davis
// Github: github.com/KyleDavisDev

// Description:
// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
// - push(x) -- Push element x onto stack.
// - pop() -- Removes the element on top of the stack.
// - top() -- Get the top element.
// - getMin() -- Retrieve the minimum element in the stack.

// Example:
// MinStack minStack = new MinStack();
// minStack.Push(-2);
// minStack.Push(0);
// minStack.Push(-3);
// minStack.GetMin();   --> Returns -3.
// minStack.Pop();
// minStack.top();      --> Returns 0.
// minStack.GetMin();   --> Returns -2.

// --------------------------------------------------------

public class MinStack {
    private Stack<int> stack;
    private Stack<int> minStack;

    /** initialize your data structure here. */
    public MinStack() {
        stack = new Stack<int>();
        minStack = new Stack<int>();
    }
    
    public void Push(int val) {
        if(stack.Count == 0)
        {
            stack.Push(val);
            minStack.Push(val);
        }
        else 
        {
            stack.Push(val);
            int currentMin = minStack.Peek();
            minStack.Push(Math.Min(currentMin, val));
        }
    }
    
    public void Pop() {
        stack.Pop();
        minStack.Pop();
    }
    
    public int Top() {
        return stack.Peek();
    }
    
    public int GetMin() {
        return minStack.Peek();
    }
}