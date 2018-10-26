var express=require('express'),
		router=express.Router();
var JWT=require('jsonwebtoken'),
		gConfig=require('../config/general')
router.post('/',function (req,res) {
		var token=JWT.sign({
				id:6666,
		},gConfig.secret,{
				expiresIn:24*60*60
				// expiresIn:60
		})
		res.status(200).send({
				token:token
		})
})
module.exports=router;