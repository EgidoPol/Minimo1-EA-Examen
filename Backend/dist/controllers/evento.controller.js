"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const evento_1 = __importDefault(require("../models/evento"));
function getEventos(req, res) {
    evento_1.default.find({}).then((data) => {
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
function getEvento(req, res) {
    evento_1.default.find({ "nombre": req.params.nombre }).then((data) => {
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
function postEvento(req, res) {
    const evento = new evento_1.default({
        "nombre": req.body.nombre,
        "descripcion": req.body.descripcion,
        "fechaE": req.body.fechaE,
        "fechaI": req.body.fechaI
    });
    console.log(req.body);
    evento.save().then((data) => {
        return res.status(201).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    });
}
exports.default = { getEvento, getEventos, postEvento };
