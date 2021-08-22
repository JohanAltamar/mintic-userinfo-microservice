const { Schema, model } = require('mongoose');

const programTypeSchema = new Schema({
    name: { type: String, required: true, trim: true },
});

module.exports = model('ProgramType', programTypeSchema);