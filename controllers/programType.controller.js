const ProgramTypeModel = require('../models/programType.model');

/* GET ALL */
const getAllProgramTypes = async (req, res ) => {
    try {
        const programTypes = await ProgramTypeModel.find();
        res.json( { results: programTypes });
    }
    catch (err) {
        res.status(500).json({message: err.message});
        console.log(err.message);
    }
}
/* GET ONE */
const getProgramTypeInfo = async (req, res) => {
    const { params } = req;
    const { program_type_id } = params;

    try {
        const programInfo =  await ProgramTypeModel.findById(program_type_id);
        res.json(programInfo);
    }
    catch (err) {
        res.status(500).json({message: err.message});
        console.log(err.message);
    }
}

/* POST */
const setProgramTypeInfo = async (req, res) => {
    const { body } = req;
    
    try {
        const newProgramInfo = new ProgramTypeModel({ ...body });
        await newProgramInfo.save();
        res.json({ message: 'Program Type Created' });
    }
    catch (err) {
        res.status(500).json({message: err.message});
        console.log(err.message);
    }
};

/* PUT */
const updateProgramTypeInfo = async (req, res) => {
    const { body, params } = req;
    const { program_type_id } = params;
    
    try {
        await ProgramTypeModel.findByIdAndUpdate(program_type_id, body);
        res.json({ message: 'Program Type Updated' });
    }
    catch (err) {
        res.status(500).json({message: err.message});
        console.log(err.message);
    }
}

module.exports = {
    getAllProgramTypes,
    getProgramTypeInfo,
    setProgramTypeInfo,
    updateProgramTypeInfo, 
}