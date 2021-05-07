const express = require('express');
const asyncHandler = require('express-async-handler');
const { Shipping } = require('../../db/models');

const router = express.Router();

// Get shipping info for user
router.get('/:id', asyncHandler(async (req, res) => {
    // userId
    const { id } = req.params;

    const shipInfo = await Shipping.findAll({
        where: {
            userId: id,
        }
    })
    return res.json(shipInfo);
}));

// Post a new shipping address
router.post('/:id', asyncHandler(async (req, res) => {
    console.log("REQ---------", req.body)
    const {
        userId,
        shipStreet,
        shipApt,
        shipCity,
        shipState,
        shipZip,
    } = req.body;

    const newAddress = await Shipping.create({
        userId,
        shipStreet,
        shipApt,
        shipCity,
        shipState,
        shipZip,
    });
    return res.json(newAddress);
}))


// Patch a new shipping address

module.exports = router;