const express = require('express');
const router = express.Router();

router.get('/landsat_mensual', (req, res) => {
    res.render('index.html', { title: 'Observatorio Satelital de Nieves' });
});

router.get('/landsat_anual', (req, res) => {
    res.render('landsatanual.html', { title: 'Observatorio Satelital de Nieves' });
});

router.get('/sentinel_mensual', (req, res) => {
    res.render('sentinelmensual.html', { title: 'Observatorio Satelital de Nieves' });
});

router.get('/sentinel_anual', (req, res) => {
    res.render('sentinelanual.html', { title: 'Observatorio Satelital de Nieves' });
});

router.get('/modis_anual', (req, res) => {
    res.render('modisanual.html', { title: 'Observatorio Satelital de Nieves' });
});

router.get('/modis_mensual', (req, res) => {
    res.render('modismensual.html', { title: 'Observatorio Satelital de Nieves' });
});

module.exports = router;