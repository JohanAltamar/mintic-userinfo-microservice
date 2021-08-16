const { Router } = require('express');
const router = Router();
const { getPersonalInfo, setPersonalInfo, updatePersonalInfo } = require('../controllers/personalInfo.controller');

router.get('/:id', getPersonalInfo);
router.post('/:id', setPersonalInfo);
router.put('/:id', updatePersonalInfo);

module.exports = router;
