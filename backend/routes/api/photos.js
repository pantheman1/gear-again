const express = require('express');
const { singlePublicFileUpload } = require('../../awsS3');
const { singleMulterUpload } = require('../../awsS3');
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
    })
    return res.json(photos);
}))

// router.post('/:id', asyncHandler(async (req, res) => {
//     console.log("BACKEND POST-------------", req.params)
//     const { id } = req.params;
//     const { image } = req.body;
//     console.log("IMAGE------", image)

//     const newPhoto = await Photo.create({
//         itemId: id,
//         url: image,
//     });
//     return res.json(newPhoto);
// }))

//This route is a POST route for AWS
router.post('/:id',
    singleMulterUpload("image"),
    asyncHandler(async (req, res) => {
        const { id } = req.params;
        const image = await singlePublicFileUpload(req.file);

        const newPhoto = await Photo.create({
            itemId: id,
            url: image,
        });
        return res.json(newPhoto);
    }))


module.exports = router;