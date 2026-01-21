const Car = require('./carLib.js')

const getAllCars = (req, res) => {
  const cars = Car.getAll();
  res.json(cars);
}
const getCarById = (req, res) => {
  const car = Car.findById(req.params.carId)
  if (!car) {
    res.status(404).json({ message: "Car not found" })
    return
  }
  res.json(car)
}
const createCar = (req, res) => {
  const { model, color, age } = req.body;

  const newCar = Car.addOne(model, color, age)
  if (!newCar) {
    res.status(500).json({ message: "Failed to create car" })
    return
  }
  res.json(newCar)
}
const updateCar = (req, res) => {
  const { model, color, age } = req.body;
  const updatedCar = Car.updateOneById(req.params.carId, { model, color, age });
  if (!updatedCar) {
    res.status(404).json({ message: "Car not found" });
    return
  }
  res.json(updatedCar)
}
const deleteCar = (req, res) => {
  const isDeleted = Car.deleteOneById(req.params.carId);
  if (!isDeleted) {
    res.status(404).json({ message: "Car not found" });
  }
  res.json({ message: "Car deleted successfully" });
}

module.exports = {
  getAllCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar,
}
