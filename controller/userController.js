var express=require('express'),
		router=express.Router();
var JWT=require('jsonwebtoken'),
		gConfig=require('../config/general')
router.get('/',(req,res)=>{
		res.status(200).send(req.userInfo);
})


module.exports=router