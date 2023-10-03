const { payment_widthdrawal } = require('../models');
const db = require('../models');
const { text } = require('body-parser');
const paywithdraw = db.payment_widthdrawal;

const addpaymentwithdraw = async (req, res) => {
    const body = req.body;
    const withdraw = await paywithdraw.create(body);
    if(withdraw){
        res.status(200).json({
            code: res.statusCode,
            data: withdraw,
            message: 'payment withdraw saved successfully'
        });
    }else{
        return res.json({
            status:0,
            message:"payment withdraw doesn't saved"
        });
    }
}

const updatepaymentwithdraw = async (req, res) => {
    let user_id = req.params.user_id
    const upwithdraw = await paywithdraw.update(req.body, { where: { user_id: user_id } });
    if(upwithdraw){
        res.status(200).json({
            data: upwithdraw,
            code: res.statusCode,
            message: 'payment withdraw update success'
        });
    }else{
        return res.json({
            status:0,
            message:"payment withdraw update failed"
        });
    }
}

module.exports = {
    addpaymentwithdraw,
    updatepaymentwithdraw
}