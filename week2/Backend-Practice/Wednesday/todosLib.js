todosArray = [];
nextId = 1;

function getAll() {
  return todosArray;
}

function getByID(id) {
  return todosArray.find((task) => task.id === id)
}

function post(task, completed, dueDate) {
  return todosArray.push({
    id: nextId++,
    task,
    completed,
    dueDate
  });
}
function put(id, params) {
  task = getByID(id)
  if (!task) {
    console.error(`ERROR: no task by id: ${id}`)
    return null
  }
  if (params.completed) { task.completed = params.completed }
  if (params.task) { task.task = params.task }
  if (params.dueDate) { task.dueDate = params.dueDate }
  return task;
}
function deleteByID(id) {
  task = getByID(id)
  if (!task) { return false }
  todosArray = todosArray.filter((task) => task.id !== id)
  return true
}

if (require.main === module) {
  console.log("getAll called:", getAll());
  let res = post("Git Gud", false, "5-24-2026")
  console.log(res)
  res = post("Git more Gud", false, "12-24-2026")
  console.log(res)
  put(1, { completed: true })
  console.log(deleteByID(2))
  console.log(getAll())
}

const Todos = {
  getAll,
  getByID,
  post,
  put,
  deleteByID,
}

module.export = Todos
