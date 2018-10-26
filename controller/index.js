var express=require('express'),
		router=express.Router();
var JWT=require('jsonwebtoken'),
		gConfig=require('../config/general')
router.use('/login',require('./loginrController'));
router.use((req,res,next)=>{
		var token=req.headers['x-access-token'];
		if (!token) return res.status(401).send({ auth: false, message: '没有token' });

		JWT.verify(token,gConfig.secret, function(err, decoded) {
				if (err) {
						return res.status(401).send({ auth: false, message: 'token验证失败' });
				}
				// console.log(decoded.exp*1000,new  Date().getTime())
				// if (decoded.exp*1000<=new Date().getTime()){
				//
				// 		return res.status(401).send({ auth: false, message: 'token已过期' });
				// }
				req.userInfo=decoded;
				// console.log(decoded);
				next();
				// res.status(200).send(decoded);
		});
		// console.log(JWT.)
})
router.use('/user',require('./userController'));
router.use('/api',require('./apiController'))
// router.use('/upload',require('./uploader'));
module.exports=router;