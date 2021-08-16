const PersonalInfoModel = require('../models/personalInfo.model');

/* GET */
const getPersonalInfo = async (req, res) => {
    const { params } = req;
    const { id } = params;

    try {
        const userInfo =  await PersonalInfoModel.findOne({ id: id }); //prueba
        
        res.json(userInfo);
    }
    catch (err) {
        res.status(500).json({message: err.message});
        console.log(err.message);
    }
}

/* POST */
const setPersonalInfo = async (req, res) => {
    const { body, params } = req;
    const { id } = params;
    
    try {
        const newInfo = new PersonalInfoModel({ 
            id,
            ...body 
        });
        await newInfo.save();
        res.json(newInfo);
    }
    catch (err) {
        res.status(500).json({message: err.message});
        console.log(err.message);
    }
};

/* PUT */
const updatePersonalInfo = async (req, res) => {
    const { body, params } = req;
    const { id } = params;
    
    try {
        const updateInfo = await PersonalInfoModel.findOneAndUpdate({ id }, body, { new: true });
        res.json(updateInfo);
    }
    catch (err) {
        res.status(500).json({message: err.message});
        console.log(err.message);
    }
}

module.exports = {
    getPersonalInfo,
    setPersonalInfo,
    updatePersonalInfo, 
}