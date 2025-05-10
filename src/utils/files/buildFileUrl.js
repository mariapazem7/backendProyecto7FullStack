
export const buildFileUrl = (req, filename, folder) => {
    try {
        if(!filename) throw new Error('No se ha proporcionado un nombre de archivo', 400);
        if(!folder) throw new Error('No se ha proporcionado una carpeta', 400);

        const domain = `${req.protocol}://${req.get('host')}`;

        return `${domain}/uploads/${folder}/${filename}`;
        
    } catch (error) {
        throw new Error(`Error al construir la URL del archivo: ${error.message}`);
    }
};