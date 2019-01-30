// const localStorage: any =
// tslint:disable-next-line:no-string-literal
// process.env.NODE_ENV === 'test' ? mockLocalStorage() : window['localStorage'];

// a wrapper around local storage because mocha unit tests and vue don't like this yet.
// warning this is not type safe! accessing the store object as an "any" is the only way to
// sidestep the compiler issues with mocha and vue for now
export abstract class LocalStorage {
	public static getItem(key: string): string | null {
		return localStorage.getItem(key);
	}
	public static setItem(key: string, value: string) {
		localStorage.setItem(key, value);
	}
	public static removeItem(key: string) {
		localStorage.removeItem(key);
	}
	public static clear() {
		localStorage.clear();
	}
	public static key(index: number): string | null {
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
		key(index: number): string | null {
			const keys = Object.keys(data);
			return keys.length > index ? keys[index] : null;
		},
		setItem(key: string, value: string) {
			data[key] = value;
		},
		getItem(key: string): string {
			return data[key];
		},
		removeItem(key: string) {
			delete data[key];
		},
		clear() {
			data = {};
		}
	};
}
