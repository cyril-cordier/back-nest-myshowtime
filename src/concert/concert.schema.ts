import * as mongoose from 'mongoose';


export const ConcertSchema = new mongoose.Schema({
    date: {
        type: String,
        required: false,
   
    },
    title: {
        type: String,
        required: true
    },
    location:{
        type: String,
        required:true,
    },
    price:{
        type: String,
        required:true,
    },
    band:{
        type: String,
        required:true,
    },
    description:{
        type: String,
        required:true,
    },
    image:{
        type: String,
        required:true,
    },
    genre:{
        type: String,
        required:true,
    },
    qrcode:{
        type: String,
        required:false,
        default:null,
    }

});

