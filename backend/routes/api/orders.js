const express = require('express');
const asyncHandler = require('express-async-handler');
const { Order } = require('../../db/models');

const router = express();

router.get('/:id', asyncHandler(async (req, res) => {
    // userId
    const { id } = req.params;

    const orders = await Order.findAll({
        where: {
            userId: id,
            // orderComplete: true,
        },
    })
    return res.json(orders);
}))

module.exports = router;