const express = require('express');
const asyncHandler = require('express-async-handler');
const { Item, Photo } = require('../../db/models');

const router = express.Router()

router.get('/', asyncHandler(async (req, res) => {
    const items = await Item.findAll();
    return res.json(items);
}))

router.get('/:id', asyncHandler(async (req, res) => {
    const categoryId = req.params.id;
    const items = await Item.findAll({
        where: {
            categoryId,
        },
        attributes: ['id', 'title', 'brand', 'price', 'categoryId'],
        include: {
            model: Photo,
            attributes: ['id', 'url', 'itemId'],
            limit: 1,
        }
    })
    return res.json(items);
}))


module.exports = router;