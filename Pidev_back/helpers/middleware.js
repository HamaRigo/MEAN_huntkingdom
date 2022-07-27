const jwt=require('jsonwebtoken');
// const role=require('./../Models/role');

exports.api=(req,res,next)=>{
	var token=req.headers['authorization'];
	if(token){
		let jwt_secret=process.env.JWT_SECRET||'mysecret';
		try {
		  var decoded = jwt.verify(token, jwt_secret);
		  if(decoded){
		  	req.user=decoded.data;
		  }
		} catch(err) {
		}	
	}

	next();
}
exports.auth=(req,res,next)=>{
	var token=req.headers['authorization'];
	if(!token){
	    return res.status(401).send({
	      message:"Please login to continue"
	    })
	}else{
		// invalid token - synchronous
		let jwt_secret=process.env.JWT_SECRET||'mysecret';
		try {
		  var decoded = jwt.verify(token, jwt_secret);
		  if(decoded){
		  	req.user=decoded.data;
		  }else{
		  	  return res.status(401).send({
	           message:"Please login to continue."
	          });
		  }
		} catch(err) {
	        // err
	        if(err.expiredAt && err.expiredAt< new Date()){
	          return res.status(401).send({
	            message:"Session expired."
	          })
	        }else{
	          return res.status(401).send({
	           message:"Please login to continue."
	          })
	        }

		}
		next();
	}	
}

exports.authPage = (permissions) => {
	return (req, res, next) => {

		const role = req.headers.role_id;

		if (permissions.includes(role)) {
			next();
		} else {
			return res.status(401).json("You dont have permission!");
		}
	}
// 	exports.authCourse = (req, res, next) => {
// // const courseNumber =
// }
	// module.exports = { authPage, authCourse };





}
