
import { Router } from 'express';
import libroRouter from './libros.routes.js';
import authRouter from './auth.routes.js';
import paymentRouter from './payments.routes.js';


const router = Router();

router.use('/libros', libroRouter);
router.use('/auth', authRouter);
router.use('/payments', paymentRouter);

export default router;