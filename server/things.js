const express = require('express');
const router = express.Router();
const Thing = require('./Thing');

router.get('/', async (req, res) => {
    try {
        const things = await Thing.find();
        res.json(things);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {
    const thing = new Thing({
        name: req.body.name
    });
    try {
        const newThing = await thing.save();
        res.status(201).json(newThing);
        
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;