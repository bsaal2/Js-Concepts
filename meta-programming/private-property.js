/** Explanation:
 * Whenver the proxy object is created then it takes the target object
 * When the property is called on the proxy then value of this = Proxy object not target object
 * But the value of this can be changed as in example below
 */

class Secret {
    #secret;
    name = 'secret';

    constructor(secret) {
        this.#secret = secret;
    }

    get secret() {
        return this.#secret;
    }
}

const secretObj = new Secret('Ram');

const handler1 = {};
const handler2 = {
    // by default, receiver = Proxy class
    get: function(target, property, receiver) { 
        // return Reflect.get(...arguments) Here receiver is Proxy. While property access, this value = receiver
        return Reflect.get(target, property);
    }
}

const proxy1 = new Proxy(secretObj, handler1);
const proxy2 = new Proxy(secretObj, handler2);


// With handler1
// Here the secret is called with the value of this = Proxy
// since Proxy cannot access the private member of Secret class, it gives error
// console.log(proxy1.secret);


// With handler2
// Even through proxy object is calling the method, the get method gets trapped.
// Inside the trapping, we are using Reflect to call the secret property within the target object itself
// It is not called within the proxy. This is the important thing
console.log(proxy2.secret);
