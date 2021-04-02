const express = require('express');
const asyncHandler = require('express-async-handler');
const { Photo, Item } = require('../../db/models');

const router = express.Router()

router.get('/', asyncHandler(async (req, res) => {
    const categoryId = req.params.id
    // console.log("CATEGORYID--------", categoryId)
    const photos = await Photo.findAll({
        include: {
            model: Item,
            attributes: ['id', 'title', 'brand', 'price', 'categoryId'],
            // where: { categoryId: categoryId }
        },
        limit: 1
    })
    // console.log("-------------------", res.json(photos))
    return res.json(photos);
}))


module.exports = router;