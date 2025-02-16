"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let todos = [];
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.status(200).json({
        todos: todos
    });
});
router.post('/todo', (req, res) => {
    const body = req.body;
    const newTodo = {
        id: new Date().toISOString(),
        text: req.body.text
    };
    todos.push(newTodo);
    res.status(201).json({
        message: 'Todo added',
        todo: newTodo
    });
});
router.delete('/todo/:todoId', (req, res) => {
    const params = req.params;
    todos = todos.filter(todoItem => todoItem.id !== params.todoId);
    res.status(200).json({
        message: 'Todo deleted successfully!'
    });
});
exports.default = router;
