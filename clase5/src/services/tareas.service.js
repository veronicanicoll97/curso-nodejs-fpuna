const findTarea = (id) => {
  const tareaEncontrada = tareas.find(item => item.id === id);
  return tareaEncontrada;
}

module.exports = {
  findTarea
}