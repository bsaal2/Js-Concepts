# Currying

- It is the concept of functional programming
- It is named after mathematician Haskell Curry
- converts the function with multiple arguments into sequence of functions with single argument at a time

Example

## Normal Function

function add(num1, num2) {
    return num1 + num2;
}
add(5, 10)


## Currying Function

function add(num1) {
    return function(num2) {
        return num1 + num2;
    }
}
add(5)(10)