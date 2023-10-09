/** What happens when Promise object is created ?
 * Does the function inside runs ?
 * When the Promise object is created then its executor function is executed immediately.
 * Based on the success or fail callback being executed, state of Promise is changed
 * Once the callback is passed to the Promise, it stays at the Micro-task Queue which has more preferences
 * over the Callback Queue.
 */

/** Executor function gets executed whenever the new Promise object is created
 * Thus printing the 'Hello' in console
 * But since we have not passed the resolve callback yet, it should not be able to execute.
 */
const executorFunction = (resolveFun, rejectFun) => {
    console.log('Hello');
    resolveFun('Promise executed');  // Here resolveFun = resolveCallback passed and it has been executed here
    // rejectFun(true);
}

const resolveCallback = (value) => {
    console.log(value);
}

// This is executed immediately from the call stack
console.log('Start of the program') 

// This goes to the Web API and runs. After 0 ms, it gets completed and push the callback function
// to Callback queue
setTimeout(() => {
    console.log('Set timeout executed');
}, 0);

// Promise executor function is executed immediately creating the Promise object
// Once the promise callback is passed, it is pushed to the micro task queue after promise is completed
const PromiseObj = new Promise(executorFunction); // new promise object created
PromiseObj
    .then(resolveCallback);

// This is immediately executed from the call stack
console.log('End of the program');

// Since the Microtask queue has high preference over the callback queue
// First the callback from Micro-task queue is pushed to callstack when the callstack is empty and executes
// Once all the micro-task queue is empty then only callback queue is executed by the Event loop