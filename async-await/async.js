
async function sum(a, b) {
    return a + b; // equivalent to return Promise.resolve(a + b)
}

const value = sum(1, 3); // Return value of async function is Promise object;
console.log(value) // Logs the promise with state fulfilled and value of 4;
value.then((value) => console.log(value));
console.log('Hey');

/** Async function declaration creates AsyncFunctionObject */
const asyncFunctionTest = async function test() {
    return 'Hello';
}

/** We can use zero or more await expression inside the async function
 * Await: makes the promise returning function behave as though they are synchronous
 * by suspending execution until the return promise is fulfilled or rejected.
 * Resolved value of promise = return value of await expression
 * Examples
 */

function logHello() {
    return new Promise((resolve, reject) => {
        console.log('Inside hello');
        setTimeout(() => resolve('Hello'), 5000)
    });
}

async function Hello() {
    const result = await logHello(); // logHello is the promise returnig function and result is resolved value of promise
    return result; // return value of async function is the Promise object with the value resolved with result
}

console.log('Hello started');
const output = Hello(); // Function is executed immediately but since it sees the await keyword it returns Promise object but with pending state
output.then((value) => console.log('Value inside then =>', value));
console.log('Output=> ', output);
console.log('Hello end');


/** Imporant Concepts
 * Async function returns Promise object with resolved value
 */

/** Using Promise */
function logHello() {
    return new Promise((resolve, reject) => {
        resolve('Hello my friend');
    });
}

/** Using async function */
async function asyncLogHello() {
    return 'Hello my friend';
}

/** Both function returned the Promise object */
logHello().then(value => console.log('Result from promise =>', value));
asyncLogHello().then(value => console.log('Result from async function =>', value));

/** Even though both return Promise object but they are different
 * Promise.resolve returns the same reference if given value is promise
 * But async function will return the different reference
 */
const p = new Promise((resolve, reject) => {
    resolve(1);
})

function basicReturn() {
    return Promise.resolve(p);
}

async function asyncReturn() {
    return p; // equivalent to Promise.resolve(p) as mentioned earlier
}

console.log('Promise resolve check: ', p === basicReturn()); // true
console.log('Promise and Async resolve check: ', p === asyncReturn()); // false