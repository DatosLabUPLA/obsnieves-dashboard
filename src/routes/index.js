const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.html', { title: 'Observatorio Satelital de Nieves' });
});

module.exports = router;