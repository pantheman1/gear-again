const express = require('express');
const { multiplePublicFileUpload } = require('../../awsS3');
const { multipleMulterUpload } = require('../../awsS3');
const asyncHandler = require('express-async-handler');
const { Item, Photo, Category } = require('../../db/models');

const router = express.Router()

router.get('/', asyncHandler(async (req, res) => {
    const items = await Item.findAll({
        include: [{
            model: Photo,
            attributes: ['id', 'url', 'itemId'],
        }, {
            model: Category,
            attributes: ['id', 'name'],
        }],
    });
    return res.json(items);
}))

router.patch('/', asyncHandler(async (req, res) => {
    const itemIdsArr = req.body;

    for (let i = 0; i < itemIdsArr.length; i++) {
        let itemId = Number(itemIdsArr[i]);
        const item = await Item.findByPk(itemId);
        item.isSold = true;
        await item.save()
    }
    return res.json("Success")
}))

router.get('/:id', asyncHandler(async (req, res) => {
    const categoryId = req.params.id;
    const items = await Item.findAll({
        where: {
            categoryId,
            isSold: false
        },
        // attributes: ['id', 'title', 'size', 'price', 'categoryId'],
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
            isSold: false,
        },
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

router.get('/sales/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const sales = await Item.findAll({
        where: {
            userId: id,
            isSold: true,
        },
        attributes: ['id', 'title', 'size', 'price', 'categoryId'],
        include: [{
            model: Photo,
            attributes: ['id', 'url'],
            limit: 1,
        }, {
            model: Category,
            attributes: ['id', 'name'],
        }]
    })
    return res.json(sales);
}))

// router.get('/item/:id', asyncHandler(async (req, res) => {
//     const { id } = req.params;
//     console.log("BACK END----------------")
//     const item = await Item.findAll({
//         where: {
//             id
//         }
//     })
//     return res.json({ item })
// }))

// Create listing
router.post('/:id',
    multipleMulterUpload("images"),
    asyncHandler(async (req, res) => {
        const { id } = req.params;
        const {
            title,
            brand,
            size,
            price,
            cost,
            weight,
            description,
            categoryId,
            conditionId,
            genderId,
        } = req.body;

        const images = await multiplePublicFileUpload(req.files);

        const newItem = await Item.create({
            title,
            brand,
            size,
            price,
            cost,
            weight,
            description,
            userId: id,
            categoryId,
            conditionId,
            genderId,
        })

        const photoList = [];

        for (const image of images) {
            const photo = await Photo.create({
                itemId: newItem.id,
                url: image
            })
            photoList.push(photo.dataValues.url)
        }

        newItem.dataValues['Photos'] = photoList;

        const categories = await Category.findByPk(newItem.dataValues.categoryId);

        newItem.dataValues['Category'] = categories;

        return res.json(newItem)
    }))

// Update listing
router.patch('/:id',
    multipleMulterUpload("images"),
    asyncHandler(async (req, res) => {
        const { id } = req.params;
        const {
            title,
            brand,
            size,
            price,
            cost,
            weight,
            description,
            categoryId,
            conditionId,
            genderId,
        } = req.body;

        const item = await Item.findByPk(id);
        item.title = title
        item.brand = brand
        item.size = size
        item.price = price
        item.cost = cost
        item.weight = weight
        item.description = description
        item.categoryId = categoryId
        item.conditionId = conditionId
        item.genderId = genderId

        if (req.files) {
            const images = await multiplePublicFileUpload(req.files);
            item.save({
                title,
                brand,
                size,
                price,
                cost,
                weight,
                description,
                categoryId,
                conditionId,
                genderId,
                images
            })
        } else {
            item.save({
                title,
                brand,
                size,
                price,
                cost,
                weight,
                description,
                categoryId,
                conditionId,
                genderId,
            })
        }
        //HERE IS WHERE I LEFT OFF

        const photoList = [];

        for (const image of images) {
            const photo = await Photo.create({
                itemId: newItem.id,
                url: image
            })
            photoList.push(photo.dataValues.url)
        }

        item.dataValues['Photos'] = photoList;

        const categories = await Category.findByPk(newItem.dataValues.categoryId);

        item.dataValues['Category'] = categories;

        return res.json(item)
    }))


module.exports = router;