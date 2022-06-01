import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';

export const Login = () => {
	const navigate = useNavigate();
	const user = Cookies.get('access_token');

	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});
	const { email, password } = formData;

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const onSubmit = (e) => {
		e.preventDefault();

		const userData = {
			email,
			password,
		};

		login(userData);
	};

	// const API_URL = 'https://bookowl-backend.herokuapp.com/user/';

	//Login
	const login = async (userData) => {
		const response = await axios.post(
			precess.env.REACT_APP_API_URL + 'user/login',
			userData
		);

		if (response.data.token) {
			Cookies.set('access_token', response.data.token);
			console.log(response.data);
			navigate('/dashboard');
		}
	};

	//Logout
	const onLogout = async () => {
		//Send token info in headers to backend to let user logout. Backend will remove HTTPOnly cookies
		await axios
			.get(precess.env.REACT_APP_API_URL + 'user/logout', {
				withCredentials: true,
				headers: {
					Authorization: `Bearer ${user}`,
				},
			})
			.then((res) => {
				//FrontEnd removed access_token from cookies("localstorage").
				Cookies.remove('access_token');
				console.log(res.data);
			});
	};

	return (
		<>
			<section>
				<h1>Login</h1>
			</section>
			<section>
				<form onSubmit={onSubmit}>
					<div className="form-group">
						<input
							type="email"
							className="form-controll"
							id="email"
							name="email"
							value={email}
							placeholder="Enter your email"
							onChange={onChange}
						/>
					</div>

					<div className="form-group">
						<input
							type="password"
							className="form-controll"
							id="password"
							name="password"
							value={password}
							placeholder="Enter your password"
							onChange={onChange}
						/>
					</div>

					<div className="form-group">
						<button type="submit" className="btn btn-block">
							Submit
						</button>
					</div>
				</form>
			</section>
			<section>
				<button className="btn" onClick={onLogout}>
					Logout
				</button>
			</section>
		</>
	);
};
