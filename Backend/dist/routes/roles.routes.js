"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rol_controller_1 = __importDefault(require("../controllers/rol.controller"));
const router = express_1.Router();
router.get('/roles', rol_controller_1.default.getRoles);
router.post('/roles/newRol', rol_controller_1.default.postRol);
router.put('/roles/updateRol', rol_controller_1.default.updateRol);
exports.default = router;
