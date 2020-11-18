"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rol_1 = __importDefault(require("../models/rol"));
function getRoles(req, res) {
    rol_1.default.find({}).then((data) => {
        let status = 200;
        if (data == null)
            status = 404;
        console.log(data);
        return res.status(status).json(data);
    }).catch((err) => {
        console.log(err);
        return res.status(500).json(err);
    });
}
function postRol(req, res) {
    console.log("Post recibido");
    const rol = new rol_1.default({
        "nombre": req.body.nombre,
        "descripcion": req.body.descripcion,
        "opciones": req.body.opciones
    });
    console.log(req.body);
    rol.save().then((data) => {
        return res.status(201).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    });
}
function updateRol(req, res) {
    const nombre = req.body.nombre;
    const descripcion = req.body.descripcion;
    const opciones = req.body.opciones;
    rol_1.default.update({ "nombre": nombre }, { $set: { "descripcion": descripcion, "opciones": opciones } })
        .then((data) => {
        res.status(201).json(data);
    }).catch((err) => {
        res.status(500).json(err);
    });
}
exports.default = { getRoles, postRol, updateRol };
