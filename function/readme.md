# Introduction

- Function is a type object in the JS
- typeof operator displays function as the 'function'
- Function class has different properties and methods
- creating the function instance using Function constructor, only runs in global scope
- every function we create are the instance of Function class
  Example:
        function add(a, b) {
            return a + b;
        }
        add instanceof Function => returns true

## Function Constructor

Syntax: 
```js
  new Function(functionBody);
  new Function(arg1, functionBody);
  new Function(arg1, arg2,.., functionBody);
```

Example:
```js
   const sum = new Function('a', 'b', 'return a + b')
```