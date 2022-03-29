class MyArray {
  constructor() {
    this.length = 0;
  }
  static isMyArray(arg) {
    return arg instanceof this;
  }
  push(value) {
    this[this.length] = value;
    this.length++;
    return this.length;
  }
  pop() {
    if (this.length > 0) {
      const number = this[this.length - 1];
      delete this[this.length - 1];
      this.length--;
      return number;
    } else {
      return undefined;
    }
  }

  forEach(callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  }
  map(callback) {
    let result = new MyArray();
    for (let i = 0; i < this.length; i++) {
      let current = callback(this[i], i, this);
      result.push(current);
    }
    return result;
  }
  shift() {
    if (this.length > 0) {
      let meaning = this[0];
      //delete this[0];
      this.length--;
      for (let i = 0; i < this.length; i++) {
        this[i] = this[i + 1];
      }
      delete this[this.length];
      return meaning;
    } else {
      return undefined;
    }
  }
  unshift(...rst) {
    if (rst.length === 0) {
      throw new RangeError("Введите значение");
    }
    for (let i = this.length - 1 + rst.length; i > 0; i--) {
      this[i] = this[i - rst.length];
    }
    for (let i = 0; i < rst.length; i++) {
      this[i] = rst[i];
    }
    this.length += rst.length;
    return this.length;
  }
  reverse() {
    for (let i = 0; i < this.length / 2; i++) {
      let meaning = this[i];
      this[i] = this[this.length - 1 - i];
      this[this.length - 1 - i] = meaning;
    }
    return this;
  }
  concat(arr2) {
    let newArr = new MyArray();
    for (let i = 0; i < this.length; i++) {
      newArr[i] = this[i];
    }
    for (let i = 0; i < arr2.length; i++) {
      newArr[i + this.length] = arr2[i];
    }
    newArr.length = this.length + arr2.length;
    return newArr;
  }
}
const arr = new MyArray();
arr.push(2);
arr.push(4);
arr.push(5);

const arr5 = new MyArray();
arr5.push(3);
arr5.push(7);
arr5.push(11);

/*arr.forEach(callback);
function callback(i, item, arr) {
  console.log(i, item, arr);
}
const newArr = arr.map(callback);
function callback(i, item, arr) {
  return i,item;
  }*/
