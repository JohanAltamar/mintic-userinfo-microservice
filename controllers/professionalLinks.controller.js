const ProfessionalLinksModel = require('../models/professionalLinks.model');

/* GET ALL */
const getAllProfessionalLinks = async (req, res ) => {
    const {params} = req;
    const {id} = params;

    try {
        const professionalLinks = await ProfessionalLinksModel.find({id}).populate({ path: 'SocialNetwork', select: 'social_network_name' })
        res.json( { results: professionalLinks });
    }
    catch (err) {
        res.status(500).json({message: err.message});
        console.log(err.message);
    }
}
/* GET ONE */
const getProfessionalLinks = async (req, res) => {
    const { params } = req;
    const {id, professional_links_id } = params;

    try {
        const professionalLinksInfo =  await ProfessionalLinksModel.findOne({id: id, _id: professional_links_id}); 
        res.json(professionalLinksInfo);
    }
    catch (err) {
        res.status(500).json({message: err.message});
        console.log(err.message);
    }
}

/* POST */
const setProfessionalLinks = async (req, res) => {
    const { params, body } = req;
    const {id} = params;
    
    try {
        const newProfessionalLinksInfo = new ProfessionalLinksModel({ id, ...body });
        await newProfessionalLinksInfo.save();
        res.json({ message: 'Link Created' });
    }
    catch (err) {
        res.status(500).json({message: err.message});
        console.log(err.message);
    }
};

/* PUT */
const updateProfessionalLinks = async (req, res) => {
    const { body, params } = req;
    const { id, professional_links_id } = params;
    
    try {
        await ProfessionalLinksModel.findOneAndUpdate({id: id, _id: professional_links_id}, body);
        res.json({ message: 'Link Updated' });
    }
    catch (err) {
        res.status(500).json({message: err.message});
        console.log(err.message);
    }
}

/* DELETE */
const deleteProfessionalLinks = async (req, res) => {
    const {params} = req;
    const {id , professional_links_id} = params;

    try {
        await ProfessionalLinksModel.findOneAndDelete({id: id , _id: professional_links_id});
        res.json({ message: 'Link Deleted'});
    }
    catch (err) {
        res.status(500).json({message: err.message});
        console.log(err.message);
    }
}

module.exports = {
    getAllProfessionalLinks,
    getProfessionalLinks,
    setProfessionalLinks,
    updateProfessionalLinks,
    deleteProfessionalLinks, 
}