"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const caso_controller_1 = __importDefault(require("../controllers/caso.controller"));
const router = express_1.Router();
router.get('/casos', caso_controller_1.default.getCasos);
router.get('/caso/:nombre', caso_controller_1.default.getCaso);
router.post('/casos/newCaso', caso_controller_1.default.postCaso);
router.put('/casos/updateCaso', caso_controller_1.default.updateCaso);
exports.default = router;
