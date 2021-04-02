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
            attributes: ['url'],
            limit: 1,
        }
    })
    // console.log("ITEMS---------->>>>>>", items)
    return res.json(items);
}))
// router.get('/:id', asyncHandler(async (req, res) => {
//     const categoryId = req.params.id;
//     const items = await Photo.findAll({
//         where: {
//             categoryId,
//         },
//         attributes: ['id', 'title', 'brand', 'price', 'categoryId'],
//     })
//     const photos = await Photo.findAll({})

//     // console.log("ITEMS---------->>>>>>", items)
//     return res.json(items);
// }))

module.exports = router;