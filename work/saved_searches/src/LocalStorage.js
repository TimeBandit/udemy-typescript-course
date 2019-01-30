// const localStorage: any =
// tslint:disable-next-line:no-string-literal
// process.env.NODE_ENV === 'test' ? mockLocalStorage() : window['localStorage'];
// a wrapper around local storage because mocha unit tests and vue don't like this yet.
// warning this is not type safe! accessing the store object as an "any" is the only way to
// sidestep the compiler issues with mocha and vue for now
export class LocalStorage {
    static getItem(key) {
        return localStorage.getItem(key);
    }
    static setItem(key, value) {
        localStorage.setItem(key, value);
    }
    static removeItem(key) {
        localStorage.removeItem(key);
    }
    static clear() {
        localStorage.clear();
    }
    static key(index) {
        return localStorage.key(index);
    }
}
// override the "length" behaviour
// Object.defineProperty(LocalStorage, "length", {
// 	value: () => (process.env.NODE_ENV === "test" ? localStorage.length() : localStorage.length),
// 	writable: false
// });
// nasty mock of local storage
function mockLocalStorage() {
    let data = {};
    return {
        length() {
            return Object.keys(data).length;
        },
        key(index) {
            const keys = Object.keys(data);
            return keys.length > index ? keys[index] : null;
        },
        setItem(key, value) {
            data[key] = value;
        },
        getItem(key) {
            return data[key];
        },
        removeItem(key) {
            delete data[key];
        },
        clear() {
            data = {};
        }
    };
}
