const { Router } = require('express');
const router = Router();
const { getAllProgramTypes, getProgramTypeInfo, setProgramTypeInfo, updateProgramTypeInfo }= require('../controllers/programType.controller');

router.get('/', getAllProgramTypes);
router.get('/:program_type_id', getProgramTypeInfo);
router.post('/', setProgramTypeInfo);
router.put('/:program_type_id', updateProgramTypeInfo);

module.exports = router;
