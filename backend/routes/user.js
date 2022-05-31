const express = require('express');
const router = express.Router();
const dotenv = require('dotenv').config();
const User = require('../models/user');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { default: mongoose } = require('mongoose');


//Authenticate
const authorization = (req, res, next) => {
	const token = req.cookies.access_token;
	if (!token) {
		return res.status(403).json({ message: 'You are not Authorized!' });
	}
	try {
		const data = jwt.verify(token, 'YOUR_SECRET_KEY');
		req.userId = data.id;
		req.email = data.email;
		req.firstName = data.firstName;
		req.lastName = data.lastName;
		req.city = data.city;
		return next();
	} catch {
		return res.status(403).json({ message: 'You have no valid token' });
	}
};

//@desc Login A User
//@routes POST /user/login
//@access Public
router.post('/login', async (req, res) => {
	const email = req.body.email;
	const password = req.body.password;

	const user = await User.findOne({ email });

	console.log('user', user);

	if (user) {
		const passwordMatch = await bcrypt.compare(password, user.password);

		if (passwordMatch) {
			const token = jwt.sign(
				{
					id: user._id,
					email: user.email,
					firstName: user.firstName,
					lastName: user.lastName,
					city: user.city,
				},
				'YOUR_SECRET_KEY'
			);

			console.log('token', token);

			return res
				.cookie('access_token', token, {
					httpOnly: true,
					secure: true,
					sameSite: 'none',
					// secure: process.env.NODE_ENV === 'production',
				})
				.status(200)
				.json({
					message: 'Logged in successfully 😊 👌',
					token: token,
				});
		} else if (!passwordMatch) {
			res.json({ message: 'sorry, could not login' });
		}
	} else {
		res.json({ message: 'sorry, could not login' });
	}
});

//@desc Authorized a user
//@routes GET /user/protected
//@access Public
router.get('/protected', authorization, (req, res) => {
	return res.json({
		user: {
			id: req.userId,
			email: req.email,
			firstName: req.firstName,
			lastName: req.lastName,
			city: req.city,
		},
	});
});

//@desc Register A User
//@routes POST /user/register
//@access Public
router.post('/register', async (req, res) => {
	const user = new User(req.body);

	const salt = await bcrypt.genSalt(10);
	user.password = await bcrypt.hash(user.password, salt);

	user.save().then(() => {
		res.status(200).json({ message: 'New user has been created! 👏' });
	});
});

//@desc Logout A User
//@routes Get /user/logout
//@access Public
router.get('/logout', authorization, (req, res) => {
	return res
		.clearCookie('access_token')
		.status(200)
		.json({ message: 'Successfully logged out' });
});

//@desc Delete A User
//@routes Delete /user/:id
//@access Public
router.delete('/:id', async (req, res) => {
	const { id } = req.params;
	if (!mongoose.Types.ObjectId.isValid(id))
		return res.status(404).json({ message: `No user with id: ${id}` });

	await User.findByIdAndRemove(id);

	return res.json({ message: 'User has been deleted successfully' });
});

//@desc Edit A User Information
//@routes PUT /user/:id/edit
//@access Public
router.put('/:id/edit', async (req, res) => {
	try {
		const id = req.params.id;
		const update = req.body;
		const options = { new: true };
		const user = await User.findByIdAndUpdate(id, update, options);
		res.status(200).json(user);
	} catch (error) {
		res.status(500).json({ message: 'Could not update User' });
	}
});

module.exports = router;
