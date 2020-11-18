import { Mongoose } from "mongoose";
import {model, Schema, Document} from 'mongoose';

export interface IRol extends Document{
    nombre: string;
    descripcion: string;
    opciones: string;
}

const rolSchema = new Schema({
    nombre: {
        type: String
    },
    descripcion: {
        type: String
    },
    opciones: {
        type: String
    }
});

export default model<IRol>('Rol', rolSchema);