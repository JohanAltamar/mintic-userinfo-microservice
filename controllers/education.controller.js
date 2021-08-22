const EducationInfoModel = require('../models/education.model');

/* GET */
const getEducationInfo = async(req, res) => {
    const { params } = req;
    const { id } = params;
    try {
        const educationInfo = await EducationInfoModel
            .find({ id })
            .populate({ path: 'program_type', select: 'name -_id' });
        res.json({
            results: educationInfo
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
        console.log(err.message);
    }
};

/* POST */
const setEducationInfo = async(req, res) => {
    const { params, body } = req;
    const { id } = params;

    try {
        const newEducationInfo = new EducationInfoModel({ id, ...body });
        await newEducationInfo.save();
        res.json({ message: 'Education info saved' });
    } catch (err) {
        res.status(500).json({ message: err.message });
        console.log(err.message);
    }
};

/* PUT */
const updateEducationInfo = async(req, res) => {
    const { params, body } = req;
    const { id, education_id } = params;
    try {
        await EducationInfoModel.findOneAndUpdate({ id, _id: education_id }, body);
        res.json({ message: 'Education info updated' });
    } catch (err) {
        res.status(500).json({ message: err.message });
        console.log(err.message);
    }
};

/* DELETE */
const deleteEducationInfo = async(req, res) => {
    const { params, body } = req;
    const { id, education_id } = params;
    try {
        await EducationInfoModel.findOneAndDelete({id, _id: education_id }, body);
        res.json({ message: 'Education info deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
        console.log(err.message);
    }
};

module.exports = {
    getEducationInfo,
    setEducationInfo,
    updateEducationInfo,
    deleteEducationInfo,
}