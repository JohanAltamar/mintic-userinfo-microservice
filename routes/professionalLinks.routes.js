const { Router } = require('express');
const router = Router();
const {getAllProfessionalLinks,getProfessionalLinks,setProfessionalLinks,updateProfessionalLinks,deleteProfessionalLinks }= require('../controllers/professionalLinks.controller');

router.get('/:id', getAllProfessionalLinks);
router.get('/:id/:professional_links_id', getProfessionalLinks);
router.post('/:id', setProfessionalLinks);
router.put('/:id/:professional_links_id', updateProfessionalLinks);
router.delete('/:id/:professional_links_id',deleteProfessionalLinks);

module.exports = router;
