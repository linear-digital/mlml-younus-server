const authChecker = require("../util/authChecker");

const router = require("express").Router();


// user Router
router.use('/user', require('./User/user.controller'))
router.use('/work', authChecker, require('./Works/work.controller'))
router.use('/withdraw', authChecker, require('./WithDraw/withdraw.controller'))
router.use('/topup', authChecker, require('./TopUp/topup.controller'))

module.exports = router