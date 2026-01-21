let carArr = [];
let nextId = 1;

function getAll() {
  return carArr ?? []
}
function post(model, color, age) {
  carArr.push({
    id: nextId++,
    model,
    color,
    age
  })
  return getByID(nextId - 1)
}

function getByID(id) {
  return carArr.find((car) => car.id === id) ?? null
}

function put(id, updatedData) {
  car = getByID(id)
  if (car) {
    if (updatedData.model) car.model = updatedData.model;
    if (updatedData.color) car.color = updatedData.color;
    if (updatedData.age) car.age = updatedData.age;
    return car; // Returns the updated car object

  }
  else { return false; }
}

function deleteByID(id) {
  const car = getByID(id);
  if (!car) {
    return false
  }
  carArr = carArr.filter((car) => car.id !== id)
  return true

}

if (require.main === module) {
  // Add cars
  let result = post("Corolla", "Red", 3);
  console.log(result);
  result = post("Civic", "Blue", 2);
  console.log(result);

  console.log("getAll called:", getAll());

  console.log("getByID called:", getByID(1));

  console.log("put called:", put(1, { age: 4, color: "Black" }));
  console.log("getByID called after item updated:", getByID(1));

  console.log("deleteById called:", deleteByID(1));
  console.log("getByID called after item deleted:", getByID(1));
}

const Car = {
  getAll,
  post,
  getByID,
  post,
  deleteByID
};

module.exports = Car;
