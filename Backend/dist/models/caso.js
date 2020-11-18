"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const casoSchema = new mongoose_1.Schema({
    nombre: {
        type: String
    },
    apellidos: {
        type: String
    },
    id: {
        type: String
    },
    fechaN: {
        type: String
    },
    fechaI: {
        type: String
    },
    nivelDeRisego: {
        type: String
    },
    genero: {
        type: String
    },
    email: {
        type: String
    },
    telf: {
        type: Number
    },
    direccion: {
        type: String
    },
    clasificacion: {
        type: String
    }
});
exports.default = mongoose_1.model('Caso', casoSchema);
