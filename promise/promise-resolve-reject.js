
/** Use of static methods resolve and reject */
const promiseResolveObj = Promise.resolve('Resolved promise');
const promiseRejectObj = Promise.reject('Reject promise');

promiseResolveObj
.then((value) => {
    return Promise.reject(value);
})
.catch((error) => {
    console.log(error);
})
.then((value) => {
    console.log(value); // This callback executes even after the reject goes to the catch block
})
.catch((error) => {
    console.log(error);
});


promiseRejectObj.catch((error) => {
    console.log(error);
})