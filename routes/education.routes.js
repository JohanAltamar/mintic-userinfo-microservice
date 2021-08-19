const { Router } = require('express');
const router = Router();
const { getEducationInfo, setEducationInfo, updateEducationInfo, deleteEducationInfo } = require('../controllers/education.controller');

router.get('/:id', getEducationInfo);
router.post('/:id', setEducationInfo);
router.put('/:id/:education_id', updateEducationInfo);
router.delete('/:id/:education_id', deleteEducationInfo);

module.exports = router;
