const { Router } = require("express");
const router = Router(); //Detecta verbos http a un endpoint

const { all, single, create } = require("../controllers/houses");

// api/houses
router.get('/', all);
router.post('/', create);
router.get('/:id', single);

module.exports = router;
