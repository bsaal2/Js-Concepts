const add = function(a) {
    return function(b) {
        return a + b;
    }
}

const addToFive = add(5);

// Display
console.info(addToFive(7));
console.info(addToFive(10));