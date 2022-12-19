# Stacks and Queues

## Challenge 10

For this challenge, we will be implementing stacks and queues by creating a Stack Class and a Queue Class with several methods to manipulate / simulate the stack and queue.


---

## Approach & Efficiency
Both Stack and Queue Class utilize similiar functions. The big O is O(1), because this challenge only requires single functions. There is no need to loop through a list which would result in a bigO of O(n). Space is also O(1), because we are able to maintain the space of O(1) due to not duplicating or making a copy of the list.

---

## API
### Class Stack:
- `push(self, item)`
    - Takes in any value as an argument and adds a new node with that value to the top of the stack with an O(1) Time performance.
- `pop(self)`
    - Takes no arguments, removes the node from the top of the stack, and returns the node's value.
    - Will raise an exception when called on an empty stack.
- `peek(self)`
    - Takes no arguments and returns the value of the node located on top of the stack, without removing it from the stack.
- `is_empty(self)`
    - Takes no arguments, and returns a boolean indicating whether or not the stack is empty.

### Class Queue:
- `enqueue(self, item)`
    - Takes any value as an argument and adds a new node with that value to the back of the queue with an O(1) Time Performance.
- `dequeue(self)`
    - Takes no arguments, remove the node from the front of the queue, and returns the node's value.
- `peek(self)`
    - Takes no arguments and returns the value of the node located in the front of the queue, without removing it from the queue.
- `is_empty(self)`
    - Takes no arguments and returns a boolean indicating whether or not the queue is empty.
