const { Schema, model } = require('mongoose');

const experienceInfoSchema = new Schema({
    id: { type: Number, required: true },
    position_name: { type: String, required: true, trim: true },
    company_name: { type: String, required: true }, /* TODO: set reference */
    company_start_date: { type: Date, required: true }, //fecha inicio
    company_end_date: { type: Date},  //fecha fin (no requerida por si la persona continúa)
    workplace: {type: String, required:true},
});

module.exports = model('ExperienceInfo', experienceInfoSchema);