"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const courses_controllers_1 = require("../controllers/courses.controllers");
const router = express_1.Router();
router.get('/', courses_controllers_1.courses);
exports.default = router;
