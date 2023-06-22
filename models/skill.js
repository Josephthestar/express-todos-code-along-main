const skills = [
  {id: 125223, skill: 'effective Programmer', done: true},
  {id: 127904, skill: 'problem solving', done: false},
  {id: 139608, skill: 'great communication', done: false},
  {id: 139605, skill: 'great analyzer', done: false},
  {id: 139604, skill: 'great debugger', done: false},
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  update
};

function update(id, updatedSkill) {
  console.log(updatedSkill,"this is updated string")
  id = parseInt(id);
  const skill = skills.find(skill => skill.id === id);
  skill.skill = updatedSkill;
  Object.assign(skill, updatedSkill);
};

function deleteOne(id) {
  id = parseInt(id);
  // Find the index for the todo
  const idx = skills.findIndex(skill => skill.id === id);
  skills.splice(idx, 1);
};

function create(skill) {
  // Add the id
  skill.id = Date.now() % 1000000;
  skill.done = false;
  skills.push(skill);
};

function getOne(id) {
  id = parseInt(id);
  return skills.find(skill => skill.id === id);
};

function getAll() {
  return skills;
};