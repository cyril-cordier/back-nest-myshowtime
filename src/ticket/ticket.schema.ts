import * as mongoose from 'mongoose';


export const TicketSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    concertId: {
        type: String,
        required: true
    },
    

});

