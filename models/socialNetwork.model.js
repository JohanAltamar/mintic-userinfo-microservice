const { Schema, model } = require('mongoose');

const socialNetworkSchema = new Schema({
    social_network_name: { type: String, required: true, trim: true },
});

module.exports = model('SocialNetwork', socialNetworkSchema);