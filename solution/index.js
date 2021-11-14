module.exports = class {

	_values = [];

	[Symbol.toStringTag] = '^_^';

	* [Symbol.iterator]() {
		for (let value of this._values) {
			yield value;
		}
	}

	constructor(array) {
		this._values = this.unique(array);
	}

	unique(array) {
		const dict = {};
		return array.filter(el => {
			if (dict[el]) {
				return false;
			}
			dict[el] = 1;
			return true;
		})
	}

	add(element) {
		this._values.push(element);
		return this;
	}

	has(element) {
		return this._values.find(el => el === element);
	}

	delete(element) {
		for (let i = 0; i < this._values.length; i++) {
			if (this._values[i] === element) {
				this._values.splice(i, 1);
				break;
			}
		}
		return false;
	}

	clear() {
		this._values = [];
	}

	forEach(callback, context = this) {
		const bindedCallback = callback.bind(context);
		for (let i = 0; i < this._values.length; i++) {
			bindedCallback(this._values[i], i, this._values);
		}
	}

	get size() {
		return this._values.length;
	}

	* keys() {
		for (let key of this._values) {
			yield key;
		}
	}

	* values() {
		for (let value of this._values) {
			yield value;
		}
	}

	* entries() {
		for (let value of this._values) {
			yield [value, value];
		}
	}
}