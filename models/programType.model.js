const { Schema, model } = require('mongoose');

const programTypeSchema = new Schema({
    program_type: { type: String, required: true, trim: true },
});

module.exports = model('ProgramType', programTypeSchema);