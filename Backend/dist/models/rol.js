"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const rolSchema = new mongoose_1.Schema({
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
exports.default = mongoose_1.model('Rol', rolSchema);
