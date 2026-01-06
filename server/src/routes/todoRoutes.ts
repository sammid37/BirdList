import { Router } from 'express';
import { createTodo, getTodos } from '../controllers/todoController.js';

const router = Router();

router.get('/', getTodos);
router.post('/', createTodo);

export default router;