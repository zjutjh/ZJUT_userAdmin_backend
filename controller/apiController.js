var express=require('express'),
		router=express.Router();
// var JWT=require('jsonwebtoken'),
// 		gConfig=require('../config/general')
router.use((req,res,next)=>{
		// console.log(req);
		let forwardMap={
				'/walk/api':'http://walk.zjutjh.com/qq',
		}
		let url=req.url;
		if(forwardMap.hasOwnProperty(url)){

		}
		return res.status(400).send({message:'该api未注册'})

})

module.exports=router