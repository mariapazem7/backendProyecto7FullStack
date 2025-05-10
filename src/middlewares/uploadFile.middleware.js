import multer from 'multer';
import { uploadFile } from '../services/files/multerConfig.js';

export const uploadPhoto = (folder, fieldname) => {
    try {
        const upload = multer({ storage: uploadFile(folder)}).single(fieldname);
        return upload;
    } catch (error) {
        throw new Error(`Error al subir la foto: ${error.message}`);
    }
};

export const uploadMultiPhotos = (folder, fields, maxCount = 5) => {
    try {
        const upload = multer({ storage: uploadFile(folder)}).array(fields, maxCount);
        return upload;
    } catch (error) {
        throw new Error(`Error al subir las fotos: ${error.message}`); 
    }
};