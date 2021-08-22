const { Schema, model } = require('mongoose');

const personalInfoSchema = new Schema({
    id: { type: Number, required: true, unique: true }, 
    name: { type: String, required: true, trim: true }, 
    lastname: { type: String, required: true, trim: true }, 
    city: { type: String, trim: true }, 
    email: { type: String, required: true, trim: true }, 
    cellphone: { type: String, required: true, trim: true }, 
    dni: { type: String, trim: true }, 
    dob: { type: Date, required: true }, 
    description: { type: String, trim: true, required: true },
    skills: { type: Array, of: String, required: true },
});

module.exports = model('PersonalInfo', personalInfoSchema);
