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

module.exports = router;