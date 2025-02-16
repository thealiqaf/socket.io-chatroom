import { Router } from 'express';
import { Todo } from '../models/todo';

type RequestBody = { text: string };
type RequestParams = { todoId: string };

let todos: Todo[] = [];

const router = Router();

router.get('/', (req, res) => {
    res.status(200).json({
        todos: todos
    });
});

router.post('/todo', (req, res) => {
    const body = req.body as RequestBody;
    const newTodo: Todo = {
        id: new Date().toISOString(),
        text: req.body.text
    };

    todos.push(newTodo);

    res.status(201).json({
        message: 'Todo added',
        todo: newTodo 
    })
});

router.delete('/todo/:todoId', (req, res) => {
    const params = req.params as RequestParams;
    todos = todos.filter(todoItem => todoItem.id !== params.todoId);
    res.status(200).json({
        message: 'Todo deleted successfully!'
    });
});

export default router;