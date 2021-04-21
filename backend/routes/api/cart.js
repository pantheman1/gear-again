const express = require('express');
const asyncHandler = require('express-async-handler');
const { CartDetail } = require('../../db/models');

const router = express.Router();

// Get all cart items for a user
router.get('/:id', asyncHandler(async (req, res, next) => {
    // userId
    const id = req.params.id;

    // try {
    const cart = await CartDetail.findAll({
        where: {
            userId: id,
        },
        attributes: ['id', 'qty', 'itemId', 'userId']
    })
    return res.json(cart);
    // } catch (error) {
    //     // console.log("ERROR -------", error)
    //     return next(error)
    // }
    // console.log("CART-------", cart.length)
    // if (!cart.length) {
    //     const err = new Error("No items are in the cart.");
    //     err.status = 401;
    //     err.title = "No items are in the cart.";
    //     err.errors = ["No items are in teh cart."];
    //     return next(err);
    // }
}))

// post an item to the users cart 
router.post('/', asyncHandler(async (req, res) => {
    // itemId
    const { qty, itemId, userId } = req.body;

    const newCartItem = await CartDetail.create({
        qty,
        itemId,
        userId,
    });

    return res.json(newCartItem)
}))

//delete item from cart
router.delete('/:id', asyncHandler(async (req, res) => {
    const { cartItemId } = req.body;
    await CartDetail.destroy({
        where: {
            id: cartItemId
        }
    });
    return res.json("ok");
}))

//delete all items from cart
router.delete('/', asyncHandler(async (req, res) => {
    const cartIds = req.body;
    console.log("ID-----------Backend", cartIds)

    for (let i = 0; i < cartIds.length; i++) {
        const cartId = cartIds[i]
        await CartDetail.destroy({
            where: {
                id: cartId
            }
        });
    }
    return res.json("ok");
}))


module.exports = router;