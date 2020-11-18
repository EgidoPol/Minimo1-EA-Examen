"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const courseSchema = new mongoose_1.Schema({
    id: {
        type: Number
    },
    description: {
        type: String
    },
    iconUrl: {
        type: String
    },
    longDescription: {
        type: String
    },
    category: {
        type: String
    },
    lessonsCount: {
        type: Number
    }
});
exports.default = mongoose_1.model('Course', courseSchema);
