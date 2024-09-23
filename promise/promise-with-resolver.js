/**
 * Compared to the traditional approach the way of returning promise object
 * and calling the resolve and reject function does not have to be nested
 *
 * Its the same resolve and reject function inside the executor function of the Promise constructor
 **/

const shouldResolve = true;
const { promise, resolve, reject } = Promise.withResolvers();

promise
    .then((value) => console.log(value))
    .catch((error) => console.log(error));

if (shouldResolve) {
    resolve('done');
}
else reject('failed');

