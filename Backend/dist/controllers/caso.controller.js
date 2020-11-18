"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const caso_1 = __importDefault(require("../models/caso"));
function getCasos(req, res) {
    caso_1.default.find({}).then((data) => {
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
function getCaso(req, res) {
    caso_1.default.find({ "nombre": req.params.nombre }).then((data) => {
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
function postCaso(req, res) {
    console.log("Post recibido");
    const caso = new caso_1.default({
        "nombre": req.body.nombre,
        "apellidos": req.body.apellidos,
        "id": req.body.id,
        "fechaN": req.body.fechaN,
        "fechaI": req.body.fechaI,
        "nivelDeRisego": req.body.nivelDeRisego,
        "genero": req.body.genero,
        "email": req.body.email,
        "telf": req.body.telf,
        "direccion": req.body.direccion,
        "clasificacion": req.body.clasificacion
    });
    console.log(req.body);
    caso.save().then((data) => {
        return res.status(201).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    });
}
function updateCaso(req, res) {
    const nombre = req.body.nombre;
    const apellidos = req.body.apellidos;
    const id = req.body.id;
    const fechaN = req.body.fechaN;
    const fechaI = req.body.fechaI;
    const nivelDeRisego = req.body.nivelDeRisego;
    const genero = req.body.genero;
    const email = req.body.email;
    const telf = req.body.telf;
    const direccion = req.body.direccion;
    const clasificacion = req.body.clasificacion;
    caso_1.default.update({ "nombre": nombre }, { $set: { "apellidos": apellidos, "id": id, "fechaN": fechaN,
            "fechaI": fechaI, "nivelDeRiesgo": nivelDeRisego, "genero": genero, "email": email, "telf": telf, "direccion": direccion, "clasificacion": clasificacion } })
        .then((data) => {
        res.status(201).json(data);
    }).catch((err) => {
        res.status(500).json(err);
    });
}
exports.default = { getCaso, getCasos, postCaso, updateCaso };
