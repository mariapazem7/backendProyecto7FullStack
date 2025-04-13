import bcrypt from 'bcrypt';
import { envs } from '../config/envs.config.js';
import { AuthError } from '../errors/TypeError.js';


const { saltRounds } = envs.auth;

export const hashPassword = async(password) => {
    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;

    } catch (error) {
        throw new AuthError('Error al intentar hashear la constraseña', 500, error);  
    }
};

export const comparePassword = async(plainPassword, hashedPassword) => {
    try {
        return await bcrypt.compare(plainPassword, hashedPassword);   
    } catch (error) {
        throw new AuthError('Error al intentar comparar la constraseña', 500, error);

    }
    
};