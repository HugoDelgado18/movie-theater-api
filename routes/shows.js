const express = require('express')
const router = express.Router();
const {check, validationResult} = require('express-validator');

const {User, Show} = require('../models/index');


router.get('/', async (req, res) => {
    const allShows = await Show.findAll();

    res.json(allShows)
})

router.get('/:id', async (req, res) => {
    const certainShow = await Show.findByPk(req.params.id)

    res.json(certainShow)
})

router.get('/:id', async (req, res) => {
    const showsWatched = await User.findByPk(req.params.id)

    res.json(showsWatched);
})

// router.post()

module.exports = router;