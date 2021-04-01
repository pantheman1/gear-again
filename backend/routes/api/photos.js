const express = require('express');
const asyncHandler = require('express-async-handler');
const { Photo } = require('../../db/models');

const router = express.Router()

router.get('/', asyncHandler(async (req, res) => {
    console.log("HER I AM =======")
    const photos = await Photo.findAll()
    return res.json(photos);
}))


module.exports = router;