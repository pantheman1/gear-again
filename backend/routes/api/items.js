const express = require('express');
const asyncHandler = require('express-async-handler');
const { Item, Photo, Category } = require('../../db/models');

const router = express.Router()

router.get('/', asyncHandler(async (req, res) => {
    const items = await Item.findAll({
        attributes: ['id', 'title', 'size', 'price', 'categoryId'],
        include: [{
            model: Photo,
            attributes: ['id', 'url', 'itemId'],
            limit: 1,
        }, {
            model: Category,
            attributes: ['id', 'name'],
        }],
        limit: 5,
        subQuery: false,
    });
    return res.json(items);
}))

router.get('/:id', asyncHandler(async (req, res) => {
    const categoryId = req.params.id;
    const items = await Item.findAll({
        where: {
            categoryId,
            isSold: false
        },
        attributes: ['id', 'title', 'size', 'price', 'categoryId'],
        include: [{
            model: Photo,
            attributes: ['id', 'url', 'itemId'],
            limit: 1,
        }, {
            model: Category,
            attributes: ['id', 'name'],
        }],
        limit: 5,
        subQuery: false,
    })
    return res.json(items);
}))

router.get('/listings/:id', asyncHandler(async (req, res) => {
    const { id } = req.params
    const listings = await Item.findAll({
        where: {
            userId: id,
        },
        attributes: ['id', 'title', 'size', 'price', 'categoryId'],
        include: [{
            model: Category,
            attributes: ['id', 'name'],
        },
        {
            model: Photo,
            attributes: ['id', 'url', 'itemId'],
            limit: 1,
        }],
    })
    return res.json(listings);
}))

router.get('/purchases/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const purchases = await Item.findAll({
        where: {
            id,
        },
        attributes: ['id', 'title', 'size', 'price', 'categoryId'],
        include: [{
            model: Photo,
            attributes: ['id', 'url', 'itemId'],
            limit: 1,
        }, {
            model: Category,
            attributes: ['id', 'name'],
        }]

    })
    return res.json(purchases);
}))


module.exports = router;