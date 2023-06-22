var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');

// All actual paths start with "/todos"

// GET /todos
router.get('/', skillsCtrl.index);
// GET /todos/new <- Define BEFORE show route
router.get('/new', skillsCtrl.new);
// GET /todos/:id
router.get('/:id', skillsCtrl.show);
// GET /todos/:id/edit
router.get('/:id/edit', skillsCtrl.edit);
// POST /todos
router.post('/', skillsCtrl.create);
// DELETE /todos/:id
router.delete('/:id', skillsCtrl.delete);
// PUT /todos/:id
router.put('/:id', skillsCtrl.update);


module.exports = router;
