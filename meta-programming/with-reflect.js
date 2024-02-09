const target = {
    first: 'Ram',
    last: 'Thapa',
};

const handler = {
    // Get trap
    get: function(target, prop, receiver) {
        console.log('Get trap entered');

        if (prop === 'first') {
            return 'First name: ' + target[prop];
        }

        return Reflect.get(...arguments);
    }
}

const proxy = new Proxy(target, handler);
// console.log(proxy.first);

// Using the Reflect get method within the proxy method  = proxy[prop]
// Using reflect does not de-proxify the proxy object
const reflectOnProxy = Reflect.get(proxy, 'first'); // equivalent to proxy['first'] or proxy.first
// console.log(reflectOnProxy);


/** 
 * What if the Reflect is called within the Proxy trap
 * Proxy is called with the Reflect method
 */
const handler2 = {
    get: function(target, prop, receiver) { // if receiver is not passed then target = receiver
        console.log('Using reflect within the Proxy trap');
        return Reflect.get(receiver, prop); // this causes infinite loop because it keeps calling proxy and call keeps get intercepted
    }
}

/** This calls get infinitely intercepted as the call each time returns the proxy's properties not the target
 * so we need to be aware here
 * We need to make sure inside the trap, it should work with the target
 */
const proxy1 = new Proxy(target, handler2);
console.log(Reflect.get(proxy1, 'first', proxy1));
