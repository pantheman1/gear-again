const express = require('express');
const asyncHandler = require('express-async-handler');
const { Category } = require('../../db/models');

const router = express.Router()

router.get('/', asyncHandler(async (req, res) => {
    const categories = await Category.findAll()
    return res.json(categories);
}))


module.exports = router;