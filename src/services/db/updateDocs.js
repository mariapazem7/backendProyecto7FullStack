import { DataBaseError } from '../../errors/typeError.js';
import { Libros } from '../../model/Libros.models.js';
import { Usuario } from '../../model/Usuario.model.js';

export const updateDocsDB = async() => {
    try {
        await Libros.updateMany(
            { isActive: { $exists: false} }, 
            { $set: { isActive: true } }
        );

        await Libros.updateMany(
            { uso: { $exists: false } },
            { $set: { uso: 'no especificado' } }
        );

        await Usuario.updateMany(
            { imagen: {$exists: false} },
            { $set: {imagen: null }}
        );    
        
    } catch (error) {
        throw new DataBaseError('No pudimos actualizar los documentos en la base de datos', 500, error);

    }
};