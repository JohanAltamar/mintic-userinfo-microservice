const { Schema, model } = require('mongoose');

const socialNetworkSchema = new Schema({
    name: { type: String, required: true, trim: true },
});

module.exports = model('SocialNetwork', socialNetworkSchema);