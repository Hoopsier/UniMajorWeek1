// Regular function
const sayHello = () => { return "Hello, world!"; }
const double = (x) => { return x * 2 }
const add = (x, y) => { return x + y }
// Regular function
const person = {
  name: "Alice",
  sayHi: () => "Hi, " + this.name + "!"
};
const numbers = [1, 2, 3, 4, 5];
const doubled = [];
numbers.forEach(num => doubled.push(num * 2));
