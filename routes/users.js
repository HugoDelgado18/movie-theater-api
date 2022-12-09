const express = require('express')
const router = express.Router();
const {check, validationResult} = require('express-validator');

const {User, Show} = require('../models/index');


router.get('/', async (req, res) => {
    const allUsers = await User.findAll();

    res.json(allUsers)
})

router.get('/:id', async (req, res) => {
    const certainUser = await User.findByPk(req.params.id)

    res.json(certainUser)
})

router.get('/:id/shows', async (req, res) => {

    const certainUser = await User.findOne({where: { id: req.params.id}})

    res.json(await certainUser.getShows());
})


router.put('/:id', async (req, res) => {

    const certainUser = await User.findByPk(req.params.id)


    if (req.body.title) {
        const findShow = await Show.findOne({ where: { title: req.body.title }})
        await certainUser.addShow(findShow)
        res.json(await certainUser.getShows())
    }
})

module.exports = router;