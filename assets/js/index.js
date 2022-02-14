function MyArray() {
  this.length = 0;

  this.push = function (value) {
    this[this.length] = value;
    this.length++;
    return this.length;
  };
  this.pop = function () {
    if (this.length > 0) {
      const number = this[this.length - 1];
      delete this[this.length - 1];
      this.length--;
      return number;
    } else {
      return undefined;
    }
  };
  /*this.forEach = function () {
    for (let i = 0; i < this.length; i++) {
      console.log(`${i}:${this[i]}`);
      
  };
}*/
  this.forEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
      callback(i, this[i], this);
    }
  };
  this.map = function (callback) {
    let result = []
    for (let i = 0; i < this.length; i++) {
      let current = callback(i, this[i], this);
      result[i]=current;
    }
        return result;
  };
}
const arr = new MyArray();
arr.push(2);
arr.push(4);
arr.push(5);
arr.forEach(callback);
function callback(i, item, arr) {
  console.log(i, item, arr);
}
const newArr = arr.map(callback);
function callback(i, item, arr) {
  return i,item;
  };
