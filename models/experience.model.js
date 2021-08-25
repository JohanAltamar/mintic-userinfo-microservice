const { Schema, model } = require('mongoose');

const experienceInfoSchema = new Schema({
    id: { type: Number, required: true },
    position_name: { type: String, required: true, trim: true },
    company_name: { type: String, required: true ,trim: true }, 
    company_start_date: { type: Date, required: true }, //fecha inicio
    company_end_date: { type: Date},  //fecha fin (no requerida por si la persona continúa)
    city: { type: String,trim: true },
    responsabilities: { type: Array, of: String },
    achievements: { type: Array, of: String },
});

module.exports = model('ExperienceInfo', experienceInfoSchema);
