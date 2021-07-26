const { Router } = require('express');

const StarsController = require('../controllers/stars');
const BranchesController = require('../controllers/branches');

const router = new Router();

router.post('/branches', BranchesController.newBranch);

router.post('/stars', StarsController.newStar);

module.exports = router;
