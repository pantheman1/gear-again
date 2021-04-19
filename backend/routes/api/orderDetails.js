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

    const itemIds = [];
    const items = {};
    for (const order in orderDetails) {
        const item = orderDetails[order].dataValues.Item.dataValues
        item['photoUrls'] = [];
        items[item.id] = item;
        itemIds.push(item.id);
    }

    const photos = await Photo.findAll({
        where: {
            itemId: itemIds
        }
    })

    for (const photo in photos) {
        const itemId = photos[photo].dataValues.itemId;
        if (itemId === items[itemId].id) {
            items[itemId].photoUrls.push(photos[photo].dataValues.url)
        }
    }

    const order = await Order.findAll({
        where: {
            id: orderId
        },
        attributes: ['shippingAddress', 'total', 'orderComplete', 'billingAddress']
    })

    const formattedResult = {
        orderId,
        createdAt: orderDetails[0].dataValues.createdAt,
        orderDetails: order[0].dataValues,
        items: Object.values(items),
    }

    return res.json(formattedResult);
}))

router.put('/', asyncHandler(async (req, res) => {
    const itemIdsArr = req.body;

    // Create order

}))


module.exports = router;