const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.html', { title: 'Observatorio Satelital de Nieves' });
});

router.get('/landsat_mensual', (req, res) => {
    res.render('landsatmensual.html', { title: 'Observatorio Satelital de Nieves' });
});

module.exports = router;