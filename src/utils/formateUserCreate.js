import { ValidationError } from '../errors/TypeError.js';

export const formateUserData = (data) => {
    const {
        nombre,
        apellido,
        correo,
        telefono,
        fecha_nacimiento,
        imagen,
        isAdmin = false,
        password: hashedPassword
    } = data;

    const requiredFields = {
        nombre,
        apellido,
        correo,
        telefono,
        fecha_nacimiento,
        imagen,
        password: hashedPassword
    };

    for (const [key, value] of Object.entries(requiredFields)) {
        if (!value) {
            throw new ValidationError(`El campo '${key}' es obligatorio para crear el usuario`);
        }
    }

    return {
        nombre,
        apellido,
        correo,
        telefono,
        fecha_nacimiento,
        imagen: imagen || null,
        password: hashedPassword,
        isAdmin
    };
};