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

    // const showsWatched = await Show.findAll({
    //     where: {
    //         rating: 5
    //     }
    // })
    const certainUser = await User.findOne({where: { id: req.params.id}})
    // await certainUser.addShow([showsWatched])
    res.json(await certainUser.getShows());
})


router.put('/:id', async (req, res) => {

    const certainUser = await User.findByPk(req.params.id)

    

    const updated = await 


    // const newShow = await Show.create({
    //     "title": "King of Queens",
    //     "genre": "Drama",
    //     "rating": 5,
    //     "status": "on-going"
    //   })

    // await certainUser.addShow(showsWatched)


    // res.json(certainUser.getShows())
    // res.json(showsWatched)
    res.json(certainUser)
})

module.exports = router;