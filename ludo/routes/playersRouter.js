const Usercontroller = require('../controllers/usercontroller');
const Boostercontroller = require('../controllers/boostercontroller');
const Dicecontroller = require('../controllers/dicecontroller');
const Claimdailybonuscontroller = require('../controllers/claimdailybonuscontroller');
const shopdatacontroller = require('../controllers/shopdatacontroller');
const Winpercentcontroller = require('../controllers/winpercentcontroller');
const UserStaticcontroller = require('../controllers/userstaticcontroller');
const Dailybonuscontroller = require('../controllers/dailybonuscontroller');

const {checktoken} = require('../auth/checktoken');
const { verifytoken } = require('../auth/verifytoken');

const router = require('express').Router()


router.post('/adduser',Usercontroller.addUser)

router.post('/login',Usercontroller.login)

router.get('/alluser',checktoken,Usercontroller.getAllUser)

router.get('/allchalanges',Usercontroller.getAllChalange)

router.get('/:user_id',checktoken,verifytoken,Usercontroller.getOneUser)

router.put('/:user_id',checktoken,verifytoken,Usercontroller.updateUser)

router.delete('/:user_id',checktoken,verifytoken,Usercontroller.deleteUser)

router.post('/updatePassword/:user_id',checktoken,verifytoken,Usercontroller.updatePassword)

router.post('/forgotPassword',Usercontroller.forgotPassword)

router.post('/purchasegems',Usercontroller.PurchaseGems)

router.post('/purchasecoins',Usercontroller.PurchaseCoin)

router.post('/seen_advertise',Usercontroller.AdCoin)

router.post('/balancedetails',Usercontroller.BalanceDetails)

router.post('/purchasebooster',Boostercontroller.addBooster)

router.post('/purchasedice',Dicecontroller.adddice)

router.post('/dailybonus',Claimdailybonuscontroller.addbonus)

router.post('/getshopdata',shopdatacontroller.getshopdata)

router.post('/winningpercentage',Winpercentcontroller.getwinpercent)

router.post('/saveUserStatistics',UserStaticcontroller.addUserstatic)

router.post('/getdailybonus',Dailybonuscontroller.getdailybonus)


module.exports = router;