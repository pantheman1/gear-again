const express = require('express');
const asyncHandler = require('express-async-handler');
import { User, CartDetail } from '../../db/models';

const router = express();

// Get all cart items for a user
router.get('/:id', asyncHandler(async (req, res) => {
    // userId
    const { id } = req.params;

    const cart = await CartDetail.findAll({
        where: {
            userId: id,
        }
    })

    return res.json(cart);
}))

// post an item to the users cart 
router.post('/:id', asyncHandler(async (req, res) => {
    // itemId
    const { itemId } = req.params;
    const { qty, userId } = req.body;

    const newCartItem = await CartDetail.create({
        qty,
        itemId,
        userId,
    });

    return res.json(newCartItem)
}))


module.exports = router;