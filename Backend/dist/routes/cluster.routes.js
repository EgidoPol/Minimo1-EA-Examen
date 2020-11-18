"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cluster_controller_1 = __importDefault(require("../controllers/cluster.controller"));
const router = express_1.Router();
router.get('/clusters', cluster_controller_1.default.getClusters);
router.get('/cluster/:nombre', cluster_controller_1.default.getCluster);
router.post('/cluster/newCluster', cluster_controller_1.default.postCluster);
exports.default = router;
