const target = {
    first: 'Ram',
    last: 'Thapa'
};

const handler = {
    get(target, prop, receiver) {
        if (Reflect.get(...arguments)) return Reflect.get(...arguments);

        return 'Hah! no property';
    }
};

const { proxy, revoke } = Proxy.revocable(target, handler);

console.log('Instance check before revoke: ', proxy instanceof Proxy) // TypeError

console.group('Without proxy')
    console.log('First: ', target.first);
    console.log('Middle: ', target.middle);
console.groupEnd('Without proxy');

console.group('Revocable proxy');
    console.log('First: ', proxy.first);
    console.log('Middle: ', proxy.middle);
console.groupEnd('Revocable proxy')

/** Revoking the proxy */
revoke();

// console.log('Instance check after revoke: ', proxy instanceof Proxy)

console.group('After proxy revoke');
    // console.log('First: ', proxy.first); // throws type error
    // console.log('Middle: ', proxy.middle); // throws type error
console.groupEnd('After proxy revoke');