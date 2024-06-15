const express = require('express');
const router = express.Router();
const reposController = require('../controllers/reposController');


router.get('/', (req, res) => {
  res.send('Início API do Challenge!')
})

// Error handling middleware
router.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

router.get('/repos', reposController.getRepos);

module.exports = router;