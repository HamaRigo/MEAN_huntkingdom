const { Validator } = require('node-input-validator');

const user=require('./../Models/user');
const role=require('./../Models/role');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

exports.register=async (req,res)=>{

	const v = new Validator(req.body, {
		email: 'required|email',
		username:'required|minLength:2|maxLength:100',
		// email: 'required|email|unique:User,email',
		first_name: 'required|minLength:2|maxLength:20',
		last_name: 'required|minLength:2|maxLength:20',
		password: 'required',
		phone:'required|minLength:8|maxLength:8',
		// profile_image:''
	});

	const matched = await v.check();

	if (!matched) {
		return res.status(422).send(v.errors);
	}

	try {
		const newUser = new user({
			first_name: req.body.first_name,
			last_name: req.body.last_name,
			username:req.body.username,
			phone:req.body.phone,
		 email:req.body.email,
		 password:req.body.password,
			// profile_image:req.body.profile_image
		});

		let userData=await newUser.save();
		return res.status(200).send({
			message:'Registration successfull',
			data:userData
		});

	}catch(err){

		return res.status(400).send({
			message:err.message,
			data:err
		});
	}

}

exports.login=async (req,res)=>{
	const v = new Validator(req.body, {
		email: 'required|email',
		password: 'required'
	});

	const matched = await v.check();

	if (!matched) {
		return res.status(422).send(v.errors);
	}

	try{
		let userData=await user.findOne({email:req.body.email});
		if(userData){

			if(bcrypt.compareSync(req.body.password, userData.password)){

				let jwt_secret=process.env.JWT_SECRET||"mysecret";
				let re_jwt_secret=process.env.JWT_SECRET||"mysecret";
				let token=jwt.sign({
					data: userData
				}, jwt_secret,{ expiresIn: '12h' });

				// refresh token
				const refreshtoken = jwt.sign({data: userData}, re_jwt_secret,{ expiresIn: '1h' })

				res.cookie('jwt', refreshtoken, {
					httpOnly: true,
					maxAge: 24 * 60 * 60 * 1000 // 1 day
				})
				return res.status(200).send({
					message:'Login successfull',
					data:userData,
					token:token
				});



			}else{
				return res.status(400).send({
					message:'Incorrect credentials',
					data:{}
				});
			}
		}else{
			return res.status(400).send({
				message:'User is not registered',
				data:{}
			});
		}
	}catch(err){
		return res.status(400).send({
			message:err.message,
			data:err
		});
	}
}

exports.logout= async (req, res) => {
	res.cookie('jwt', '', {maxAge: 0})

	res.send({
		message: 'goodbye'
	})
}

