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
router.patch('/:id', asyncHandler(async (req, res) => {
    const {
        userId,
        shipStreet,
        shipApt,
        shipCity,
        shipState,
        shipZip,
        shipId,
    } = req.body;

    const ship = await Shipping.findByPk(shipId)

    ship.shipStreet = shipStreet;
    ship.shipApt = shipApt;
    ship.shipCity = shipCity;
    ship.shipState = shipState;
    ship.shipZip = shipZip;
    await ship.save();
    return res.json(ship);
}))

module.exports = router;