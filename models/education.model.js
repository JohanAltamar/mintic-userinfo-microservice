const { Schema, model } = require('mongoose');

const educationInfoSchema = new Schema({
    id: { type: Number, required: true },
    program_name: { type: String, required: true, trim: true },
    program_type: { type: Schema.Types.ObjectId, ref: "ProgramType", required: true },
    institution_name: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    start_date: { type: Date, required: true },
    end_date: { type: Date },
});

module.exports = model('EducationInfo', educationInfoSchema);
