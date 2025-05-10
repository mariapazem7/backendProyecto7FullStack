import { Router } from 'express';
import { login, register, updateUserProfile, verifySession } from '../controllers/auth.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';
import { uploadPhoto } from '../middlewares/uploadFile.middleware.js';

const router = Router();

router.post('/register', uploadPhoto('usuarios', 'file'), register);
router.post('/login', login);
router.get('/session', authMiddleware, verifySession);
router.put('/profile', authMiddleware, updateUserProfile);

export default router;