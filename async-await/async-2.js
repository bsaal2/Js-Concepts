/** Being the async function,
 * return value is Promise
 * but the since there is no return so it returns undefined
 */
async function add() {
    await 'added';
}

/** This function returns the resolvedPromise object
 * First value is resolved and then new Promise object with value undefined has been returned
 */
function addPromise() {
    return Promise.resolve('added').then(() => void 0);
}

add().then(value => console.log('Log from the async function:', value));
addPromise().then(value => console.log('Log from the promise: ', value));

/** These both functions are equivalent */