const express = require('express');
const router = express.Router();
const mpTrainsData = require('../seeds/mp'); // adjust path if needed

// ...existing GET routes...

router.post('/', (req, res) => {
    const { from, to, date, preference } = req.body;
    const matchedTrains = mpTrainsData.filter(train => {
        const matchesFrom = train.properties.from_station_name === from;
        const matchesTo = train.properties.to_station_name === to;
        const matchesClass = !preference || train.properties.classes.includes(preference);
        return matchesFrom && matchesTo && matchesClass;
    });
    console.log('Matched trains:', matchedTrains);
    
    res.render('bookResults', { trains: matchedTrains, search: { from, to, date, preference } });
});

module.exports = router;