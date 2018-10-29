var express=require('express'),
		router=express.Router();
var {URL}=require('url');
var bodyParser = require('body-parser');
var request=require('request-promise-native');
// var JWT=require('jsonwebtoken'),
// 		gConfig=require('../config/general')
router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
router.use((req,res,next)=>{
		let body=req.body;
		// console.log(req);
		// console.log(req.body);
		let forwardMap={
				'/walk/api':'http://walk.zjutjh.com/qq',
		}
		let url=req._parsedUrl;
		// console.log(url.pathname);
		if(forwardMap.hasOwnProperty(url.pathname)){
			let urlForward=forwardMap[url.pathname];
				if(url.search){//如果有查询
					urlForward=`${urlForward}${url.search}`
				}
				let response;
				request({
						uri:urlForward,
						method:req.method,
						body:JSON.stringify(body),
				}).then((reqx)=>{
						// console.log(res)
						response= res.status(200).send(reqx)
				}).catch((err)=>{
						// console.log(err);
						response= res.status(err.statusCode).send(err.message)
				})
				return response;
				// console.log(urlForward);

		}
		return res.status(400).send({message:'该api未注册'})

})
// router.post('/',function (res,req) {
// 		console.log(req);
// })
module.exports=router