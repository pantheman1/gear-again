const express = require('express');
const asyncHandler = require('express-async-handler');
const { Item } = require('../../db/models');

const router = express.Router()

router.get('/', asyncHandler(async (req, res) => {
    const items = await Item.findAll();
    return res.json(items);
}))

module.exports = router;