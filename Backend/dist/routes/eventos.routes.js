"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const evento_controller_1 = __importDefault(require("../controllers/evento.controller"));
const router = express_1.Router();
router.get('/eventos', evento_controller_1.default.getEventos);
router.get('/evento/:nombre', evento_controller_1.default.getEvento);
router.post('/evento/newEvento', evento_controller_1.default.postEvento);
exports.default = router;
