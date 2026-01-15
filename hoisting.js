const cube = (x) => { return x ** 3 }
const fullName = (first, last) => { return first + " " + last }
console.log(cube(26), fullName("Yo", "Mama"))
const power = (base, exp) => {
  if (exp === 0) { return 1; }
  return base ** exp
}
const sumCubes = (nums) => {
  let total = 0;
  nums.forEach(num => {
    total += cube(num)
  });
  return total
}
console.log(power(15, 98), sumCubes([1, 2, 3, 4, 5, 6, 28]))
