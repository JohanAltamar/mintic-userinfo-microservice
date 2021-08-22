const { Schema, model } = require('mongoose');

const professionalLinksSchema = new Schema({
    id: { type: Number, required: true }, 
    social_network: { type: Schema.Types.ObjectId, ref: "SocialNetwork", required: true },
    url: { type: String, required: true, trim: true },
});

module.exports = model('ProfessionalLink', professionalLinksSchema);
