import type { Request, Response } from 'express';
import Todo from '../models/Todo.js';

export const createTodo = async (req: Request, res: Response) => {
    try {
        const { title } = req.body;

        if (!title || typeof title !== 'string' || title.trim().length === 0) {
            return res.status(400).json({ message: 'Título é obrigatório' });
        }

        const newTodo = new Todo({ title: title.trim() });
        await newTodo.save();

        return res.status(201).json(newTodo);
    } catch (error) {
        console.error('Erro ao criar a tarefa:', error);
        return res.status(500).json({ message: 'Erro ao criar a tarefa', error });
    }
};

export const getTodos = async (req: Request, res: Response) => {
    try {
        const todos = await Todo.find();
        return res.status(200).json(todos);
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao buscar as tarefas', error });
    }
}