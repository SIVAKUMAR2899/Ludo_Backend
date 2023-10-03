const Usercontroller = require('../controllers/usercontroller');
const Boostercontroller = require('../controllers/boostercontroller');
const Dicecontroller = require('../controllers/dicecontroller');
const Claimdailybonuscontroller = require('../controllers/claimdailybonuscontroller');
const shopdatacontroller = require('../controllers/shopdatacontroller');
const Winpercentcontroller = require('../controllers/winpercentcontroller');
const UserStaticcontroller = require('../controllers/userstaticcontroller');
const Dailybonuscontroller = require('../controllers/dailybonuscontroller');
const Roomcontroller = require('../controllers/roomcontroller');
const Resultcontroller = require('../controllers/resultcontroller');
const Paywithdrawcontroller = require('../controllers/paymentwithdrawcontroller');
const Payhistorycontroller = require('../controllers/paymenthistorycontroller');

const {checktoken} = require('../auth/checktoken');
const { verifytoken } = require('../auth/verifytoken');

const router = require('express').Router()


router.post('/adduser',Usercontroller.addUser)

router.post('/login',Usercontroller.login)

router.get('/alluser',checktoken,Usercontroller.getAllUser)

router.get('/allchalanges',Usercontroller.getAllChalange)

router.get('/:user_id',checktoken,verifytoken,Usercontroller.getOneUser)

router.put('/:user_id',checktoken,verifytoken,Usercontroller.updateUser)

router.post('/updatebank',checktoken,verifytoken,Usercontroller.Ubinform)

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

router.post('/createroom',Roomcontroller.createroom)

router.post('/getroominfo',Roomcontroller.getroominfo)

router.post('/uniquegameid',Usercontroller.uniquegameid)

router.post('/addresult',Resultcontroller.addresult)

router.post('/updateresult',Resultcontroller.updateresult)

router.post('/addwithdraw',Paywithdrawcontroller.addpaymentwithdraw)

router.post('/updatewithdraw',Paywithdrawcontroller.updatepaymentwithdraw)

router.post('/addhistory',Payhistorycontroller.addpaymenthistory)

router.post('/updatehistory',Payhistorycontroller.updatepaymenthistory)


module.exports = router;