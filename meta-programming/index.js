/**
 * Proxy
 * Introduction
 * Proxy is the part of meta-programming
 * Its object enables us to re-define the fundamental properties of the target object
 * in runtime
 * It helps us to create new object which can be used in place of original object.
 * But we can redefine fundamental operations like
 * - property access
 * - validate
 * - format
 * - sanitize inputs etc
 */

/** 
 * Syntax:
 * const proxy = new Proxy(target, handler)
 * 
 * target: original object which you want to proxy
 * handler: object that defines which operation of original object should be proxied, and enables us to define the logic for its operation
 */

const target = {
    first: 'Ram',
    last: 'Thapa'
}

// If the handler object is empty then original object and proxy object behaves same
const handler = {};

const proxy = new Proxy(target, handler);

// Now we can use proxy object in place of target object
console.group('==Proxy instance==');
console.log(proxy.first, ' ', proxy.last);
console.groupEnd('==Proxy instance==');

// Now lets customize/proxy some operation of the object
// All functions within the handler object are also called WebTransport. As when the property of the target object
// is called, they trap the call and execute the handler function
const handler1 = {
    get(target, prop, receiver) {
        console.log('Target: ', target); // it is a target object
        console.log('Prop: ', prop); // property we are trying to access
        console.log('Receiver: ', receiver); // if receiver is not provided then target becomes the receiver

        return 'You are proxied';
    },
};
console.group('==Handler1==');
const proxy1 = new Proxy(target, handler1);
console.log('Property access:', proxy1.first);
console.groupEnd('==Handler1==');

/** More examples on Proxy */
const target2 = {
    name: 'apple',
    location: 'Nepal'
};
const proxy2 = new Proxy(target2, {
    get(target, property) {
        if (property === 'name') return 'orange';
        return Reflect.get(target, property);
    }
});
console.log(proxy2.name);
console.log(proxy2.location);