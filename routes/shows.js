const express = require('express')
const router = express.Router();
const {check, validationResult} = require('express-validator');

const {User, Show} = require('../models/index');


router.get('/', async (req, res) => {
    const allShows = await Show.findAll();

    res.json(allShows)
})

router.get('/:id', async (req, res) => {
    const certainShow = await Show.findOne({ where: {id: req.params.id}})

    res.json(certainShow)
})

router.get('/genres/:genre', async (req, res) => {
    const certainShow = await Show.findAll({ where: {genre: req.params.genre}})

    res.json(certainShow);
})

router.put('/rating/:id',[
    check("rating").not().isEmpty().trim()
], async (req, res) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
       res.json({error: errors.array()})
    } else {

    const updated = await Show.update({
        rating: req.body.rating
    },
    {
        where: {
            id: req.params.id
        }
    }
    )

    const certainShow = await Show.findOne({ where: {id: req.params.id}})

    res.json(certainShow)
    }

}) 

router.put('/status/:id',[
    check("status").not().isEmpty().trim(),
    check('status').not().isLength({min: 5, max: 25})
], async (req, res) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
       res.json({error: errors.array()})
    } else {

    const updated = await Show.update({
        status: req.body.status
    },
    {
        where: {
            id: req.params.id
        }
    }
    )

    const certainShow = await Show.findOne({ where: {id: req.params.id}})

    res.json(certainShow)
    }

}) 

router.delete('/:id', async (req, res) => {

    const deleteShow = await Show.destroy({
        where: {
            id: req.params.id
        }
    })

    const allShows = await Show.findAll()

    res.json(allShows)


})



// router.post()

module.exports = router;