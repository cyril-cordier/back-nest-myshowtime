"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketSchema = void 0;
const mongoose = require("mongoose");
exports.TicketSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    concertId: {
        type: String,
        required: true
    },
});
//# sourceMappingURL=ticket.schema.js.map