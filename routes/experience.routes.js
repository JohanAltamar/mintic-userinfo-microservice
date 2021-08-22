const { Router } = require('express');
const router = Router();
const { getExperienceInfo, setExperienceInfo, updateExperienceInfo, deleteExperienceInfo } = require('../controllers/experience.controller');

router.get('/:id', getExperienceInfo);
router.post('/:id', setExperienceInfo);
router.put('/:id/:experience_id', updateExperienceInfo);
router.delete('/:id/:experience_id', deleteExperienceInfo);

module.exports = router;
