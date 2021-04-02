const express = require('express');
const asyncHandler = require('express-async-handler');
const { Photo, Item } = require('../../db/models');

const router = express.Router()

router.get('/', asyncHandler(async (req, res) => {
    const categoryId = req.params.id
    const photos = await Photo.findAll({
        include: {
            model: Item,
            attributes: ['id', 'title', 'brand', 'price', 'categoryId'],
        },
        limit: 1
    })
    return res.json(photos);
}))


module.exports = router;