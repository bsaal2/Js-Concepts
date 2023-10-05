## Generator

Generator function is like the normal function but it makes it as special by using special character (*).
We can Generator object from Generator function. It conforms to both Iterable protocal and Iterator protocal.

It is the subclass of hidden Iterator class.

## Iteration Protocals

This protocal can be implemented by any object by following some conventions

There are two iteration protocal

### 1. Iterable Protocal 

In order to be iterable, object must implement @@iterator method.
Meaning Object in its prototype chain must have a property named @@iterator which is available via Symbol.iterator

[Symbol.iterator]
It is a no argument function which returns an object, conforming to the **Iterator protocal**

### 2. Iterator Protocal

It defines the standard way of producing the sequence of value either finite or infinite.
An object is an iterator when it implements the next() method

Following are the methods of Iterator protocal
a. next()
b. return() -> After calling this method, further sequence won't be created and done properties would be true
c. throw()

All these methods need to return an object implementing IteratorResult interface.
Interface has following properties
a. done: It is false if the sequence can be further created and its true if is completed
b. value: JS value returned by iterator. can be omitted when done is true



## Workflow

When an object needs to iterated (such as begining of for..loop), its @@iterator method is called with no arguments.
Then iterator is returned.
Iterator is used to obtain the value to be iterated.


Example:
```js

const person = {};
person[Symbol.iterator] = function() {
    return {
        next: function() {
            return {
                value: 1,
                done: false
            }
        }
    }
}
```