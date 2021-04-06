const express = require('express');
const asyncHandler = require('express-async-handler');
const { OrderDetail, Item, Photo, Order, User } = require('../../db/models');

const router = express();


router.get('/:id', asyncHandler(async (req, res) => {
    const orderId = req.params.id;
    const orderDetails = await OrderDetail.findAll({
        where: {
            orderId: orderId
        },
        include: {
            model: Item,
            include: {
                model: User,
            }
        },
    })
    const orderItemId = orderDetails[0].dataValues.itemId

    const itemIds = [];

    const items = {};

    for (const orderEntry in orderDetails) {
        let item = orderEntry['Item']
        items[item['id']] = item;
    }

    const photos = await Photo.findAll({
        where: {
            itemId: orderItemId
        }
    })

    for (const photo in photos) {
        item[photo['itemId']]['url'] = photo[url];
    }

    return res.json(orderDetails);
}))


module.exports = router;