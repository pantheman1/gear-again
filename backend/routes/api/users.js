const bcrypt = require('bcryptjs');
const { singlePublicFileUpload } = require('../../awsS3');
const { singleMulterUpload } = require('../../awsS3');

const express = require('express');
const { check } = require('express-validator');
const asyncHandler = require('express-async-handler');

const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

const router = express.Router();

const validateSignup = [
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.'),
  check('username')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a username with at least 4 characters.'),
  check('username').not().isEmail().withMessage('Username cannot be an email.'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
  handleValidationErrors
];

const validateUpdateAccount = [
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.'),
  check('username')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a username with at least 4 characters.'),
  check('username').not().isEmail().withMessage('Username cannot be an email.'),
  handleValidationErrors
];


// Sign up
router.post(
  '/',
  singleMulterUpload("profileImageUrl"),
  validateSignup,
  asyncHandler(async (req, res) => {
    const { email, password, username, name } = req.body;
    const profileImageUrl = await singlePublicFileUpload(req.file);
    const user = await User.signup({ name, email, username, password, profileImageUrl, });

    await setTokenCookie(res, user);

    return res.json({
      user
    });
  })
);

// Update User Account
router.patch('/:id',
  singleMulterUpload("profileImageUrl"),
  validateUpdateAccount,
  asyncHandler(async (req, res) => {
    const { name, username, email, bio, password } = req.body;
    // const hashedPassword = bcrypt.hashSync(password);
    const { id } = req.params
    const user = await User.findByPk(id)
    user.name = name
    user.username = username
    user.email = email
    user.bio = bio
    // user.hashedPassword = hashedPassword

    if (req.file) {
      const profileImageUrl = await singlePublicFileUpload(req.file);
      user.profileImageUrl = profileImageUrl
      user.save({ name, email, username, bio, profileImageUrl, })
    } else {
      user.save({ name, email, username, bio, })
    }

    await setTokenCookie(res, user);

    return res.json({ user })
  })
)

module.exports = router;
