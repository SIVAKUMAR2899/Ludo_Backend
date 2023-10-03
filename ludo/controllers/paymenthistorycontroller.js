const { payment_history } = require('../models');
const db = require('../models');
const { text } = require('body-parser');
const payhistory = db.payment_history;

const addpaymenthistory = async (req, res) => {
    const body = req.body;
    const history = await payhistory.create(body);
    if(history){
        res.status(200).json({
            code: res.statusCode,
            data: history,
            message: 'payment history saved successfully'
        });
    }else{
        return res.json({
            status:0,
            message:"payment history doesn't saved"
        });
    }
}

const updatepaymenthistory = async (req, res) => {
    let user_id = req.params.user_id
    const uphistory = await payhistory.update(req.body, { where: { user_id: user_id } });
    if(uphistory){
        res.status(200).json({
            data: uphistory,
            code: res.statusCode,
            message: 'payment history update success'
        });
    }else{
        return res.json({
            status:0,
            message:"payment history update failed"
        });
    }
}

module.exports = {
    addpaymenthistory,
    updatepaymenthistory
}