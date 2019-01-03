// Create a generic Map(an Object like an Array, but instead with Key - Value Pairs).
// The key will always be a string.

// Let's keep it simple and only add the following methods to the Map:
// mysolution
class MyMap<T> {
	private item = new Map();
	// should create a new key-value pair
	setItem(key: string, item: T) {
		return this.item.set(key, item);
	}
	// should retrieve the value of the provided key
	getItem(key: string) {
		return this.item.get(key);
	}
	// should remove all key-value pairs
	clear() {
		return this.item.clear();
	}
	// should output key-value pairs
	printMap() {
		return this.item.entries();
	}
}

// Max solution
class Solution<T> {
	private map: { [key: string]: T } = {};
	setItem(key: string, item: T) {
		this.map[key] = item;
	}
	getItem(key: string) {
		return this.map[key];
	}
	clearItem() {
		this.map = {};
	}
	printMap() {
		for (const item in this.map) {
			if (this.map.hasOwnProperty(item)) {
				const element = this.map[item];
				console.log(element);
			}
		}
	}
}
// The map should be usable like shown below:

const numberMap = new MyMap<number>();
numberMap.setItem("apples", 5);
numberMap.setItem("bananas", 10);
numberMap.printMap();

const stringMap = new MyMap<string>();
stringMap.setItem("name", "Max");
stringMap.setItem("age", "27");
stringMap.printMap();
