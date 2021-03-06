const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const categoriesRouter = require('./categories.js');
const itemsRouter = require('./items.js');
const photosRouter = require('./photos.js');
const ordersRouter = require('./orders.js');
const orderDetailsRouter = require('./orderDetails.js');
const cartsRouter = require('./cart.js');
const shipRouter = require('./ship.js');
const billRouter = require('./bill.js');

// GET /api/set-token-cookie
const asyncHandler = require('express-async-handler');
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');

router.get(
  '/set-token-cookie',
  asyncHandler(async (req, res) => {
    const user = await User.findOne({
      where: {
        username: 'Demo-lition'
      }
    });
    setTokenCookie(res, user);
    return res.json({ user });
  })
);

// GET /api/restore-user
const { restoreUser } = require('../../utils/auth.js');
router.get('/restore-user', restoreUser, (req, res) => {
  return res.json(req.user);
});

// // GET /api/require-auth
// const { requireAuth } = require('../../utils/auth.js');
// router.get(
//   '/require-auth',
//   requireAuth,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );

router.post('/test', function (req, res) {
  res.json({ requestBody: req.body });
});

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/categories', categoriesRouter);
router.use('/items', itemsRouter);
router.use('/photos', photosRouter);
router.use('/orders', ordersRouter);
router.use('/orderDetails', orderDetailsRouter);
router.use('/cart', cartsRouter);
router.use('/ship', shipRouter);
router.use('/bill', billRouter);

module.exports = router;
