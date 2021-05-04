const express = require('express');
const asyncHandler = require('express-async-handler');
const { Billing } = require('../../db/models');

const router = express.Router();

// Get billing info for user
router.get('/:id', asyncHandler(async (req, res) => {
    // userId
    const { id } = req.params;

    const billInfo = await Billing.findAll({
        where: {
            userId: id,
        }
    })
    return res.json(billInfo);
}));

module.exports = router;