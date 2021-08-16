const { Router } = require('express');
const router = Router();
const { getExperienceInfo, setExperienceInfo, updateExperienceInfo } = require('../controllers/experience.controller');

router.get('/:id', getExperienceInfo);
router.post('/:id', setExperienceInfo);
router.put('/:id/:experience_id', updateExperienceInfo);

module.exports = router;

//CREACION ROUTER DE LA EXPERIENCIA LABORAL.
