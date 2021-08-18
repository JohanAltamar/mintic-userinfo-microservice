const ExperienceInfoModel = require('../models/experience.model');

/* GET */
const getExperienceInfo = async(req, res) => {
    const { params } = req;
    const { id } = params;
    try {
        const experienceInfo = await ExperienceInfoModel.find({ id });
        res.json({
            results: experienceInfo
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
        console.log(err.message);
    }
};

/* POST */
const setExperienceInfo = async(req, res) => {
    const { params, body } = req;
    const { id } = params;

    try {
        const newExperienceInfo = new ExperienceInfoModel({ id, ...body });
        await newExperienceInfo.save();
        res.json({ message: 'Experience info saved' });
    } catch (err) {
        res.status(500).json({ message: err.message });
        console.log(err.message);
    }
    
};

/* PUT */
const updateExperienceInfo = async(req, res) => {
    const { params, body } = req;
    const { id, experience_id } = params;
    try {
        await ExperienceInfoModel.findOneAndUpdate({id:id, _id: experience_id}, body);
        res.json({ message: 'Experience info updated' });
    } catch (err) {
        res.status(500).json({ message: err.message });
        console.log(err.message);
    }
};

module.exports = {
    getExperienceInfo,
    setExperienceInfo,
    updateExperienceInfo,
}