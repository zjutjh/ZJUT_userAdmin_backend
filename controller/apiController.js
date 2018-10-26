var express=require('express'),
		router=express.Router();
var {URL}=require('url');
var bodyParser = require('body-parser');
// var JWT=require('jsonwebtoken'),
// 		gConfig=require('../config/general')
router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
router.use((req,res,next)=>{
		console.log(req.body);
		let forwardMap={
				'/walk/api':'http://walk.zjutjh.com/qq',
		}
		let url=req._parsedUrl;
		console.log(url.pathname);
		if(forwardMap.hasOwnProperty(url.pathname)){
			let urlForward=forwardMap[url.pathname];
				if(url.search){
					urlForward=`${urlForward}${url.search}`
				}
				console.log(urlForward);
				return res.status(200).send({url:urlForward})
		}
		return res.status(400).send({message:'该api未注册'})

})
// router.post('/',function (res,req) {
// 		console.log(req);
// })
module.exports=router