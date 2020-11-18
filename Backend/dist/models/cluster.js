"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const clusterSchema = new mongoose_1.Schema({
    nombre: {
        type: String
    },
    descripcion: {
        type: String
    },
    fechaI: {
        type: String
    }
});
exports.default = mongoose_1.model('Cluster', clusterSchema);
