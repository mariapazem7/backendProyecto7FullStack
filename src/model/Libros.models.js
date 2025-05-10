import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const librosSchema = new Schema({
    titulo: {type: String, required: true},
    autor:{type: String, required: true},
    genero:{type: String, required: true},
    precio: {type: Number, required: true},
    stock: {type: Number, required: true, min: [0, 'El stock no puede ser negativo'],},
    ano_publicacion:{type: Number, required: true},
    descripcion: {type: String, required: true},
    uso:{type: String, required: true},
    imagen: {
        type: String,
        trim: true,
        validate: {
            validator(value) {
                return /^https?:\/\/.*\.(jpg|jpeg|png|webp|gif)$/i.test(value);
            },
            message: 'La URL de la imagen no es valida'
        }
    },
    isActive: {type: Boolean, default: true},
}, { 
    versionKey: false, 
    timestamps: false, 
    toJSON: {
        transform:(doc, ret) => {
            delete ret.isActive;
            return ret;

        }

    }  
});

export const Libros = mongoose.model('libros', librosSchema);
