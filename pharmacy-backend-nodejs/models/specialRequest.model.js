'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SpecialRequestSchema = new Schema({
    drugName: {
        type: String,
        required: true
    },
    brandName: {
        type: String,
        ref: 'DrugSchema'
    },
    unitPrice: {
        type: Number,
        required : true
    },
    availableDrug: {
        type:String,
        ref:'inventory/available'
    },
    unitWeight: {
        type: Number,
        required : true
    },
    department: {
        type: Schema.ObjectId,
        ref: 'Department'
    },
    requestedDate: {
        type: Schema.ObjectId,
        required: String
    },
    issuedDate:{
        type: String,
    }
});

const SpecialRequest = mongoose.model('SpecialRequest', SpecialRequestSchema);

module.exports = SpecialRequest;