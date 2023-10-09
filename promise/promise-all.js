/** 
 * Below are the static methods of Promise
 * a. Promise.all
 * b. Promise.allSettled
 * c. Promise.any
 * d. Promise.race
 */

/** Promise.all:
 * Takes the iterables of Promise
 * Returns single Promise object
 * Promise is fulfilled if all the Promises are fulfilled
 * Promise is rejected if any of the single Promise is rejected
 */

/** All Promise fulfilled example */
const Promise1 = Promise.resolve('Promise 1 resolved');
const Promise2 = Promise.resolve('Promise 2 resolved');

const PromiseObj = Promise.all([Promise1, Promise2]);
PromiseObj.then((value) => {
    console.log(value);
})

/** Once Promise failed */
const Promise3 = Promise.resolve('Promise 3 resolved');
const Promise4 = Promise.reject('Promise 4 rejected');

const PromiseObj1 = Promise.all([Promise3, Promise4]);
PromiseObj1.then((value) => {
    console.log(value);
})
.catch((error) => {
    console.log(error);
})


/** Notes:
 * The above PromiseObj is an instance of Promise
 * It has an instance method such as then, catch and finally
 */
