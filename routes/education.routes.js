const { Router } = require('express');
const router = Router();
const { getEducationInfo, setEducationInfo, updateEducationInfo } = require('../controllers/education.controller');

router.get('/:id', getEducationInfo);
router.post('/:id', setEducationInfo);
router.put('/:id/:education_id', updateEducationInfo);

module.exports = router;
