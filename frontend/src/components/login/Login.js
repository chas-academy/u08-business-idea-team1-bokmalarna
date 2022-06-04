import React, { useEffect } from 'react';
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

	//Login function
	const login = async (userData) => {
		const response = await axios.post(
			process.env.REACT_APP_API_URL + 'user/login',
			userData
		);
		if (response.data.token) {
			Cookies.set('access_token', response.data.token);
			console.log(response.data);
			navigate('/dashboard');
			window.location.reload();
		}
	};

	//When component mounts
	useEffect(() => {
		//User should not be able to login while he/she is already loged in.
		if (user) {
			navigate('/dashboard');
		}
	}, [user]);

	return (
		<>
			<main className="App bg-books py-5 px-4">
				<section className="container shadow bg-body rounded border border-dark bg-opacity-75 pb-4">
					<h1 className="text-center pt-5 display-1 fw-normal">
						Login
					</h1>
					<div className="d-flex justify-content-center my-2">
						<img
							src="https://i.imgur.com/S8WCatY.png"
							alt="BookOwl Logo"
						/>
					</div>
					<form
						className="d-flex column justify-content-center align-items-center"
						onSubmit={onSubmit}
					>
						<div className="row g-3 align-items-center d-flex justify-content-center">
							<div className="col-auto">
								<label
									htmlFor="email"
									className="col-form-label"
								>
									Email
								</label>
							</div>

							<div className="form-group">
								<input
									type="email"
									className="form-control rounded border border-dark"
									id="email"
									name="email"
									value={email}
									placeholder="Enter your email"
									onChange={onChange}
								/>
							</div>
							<div className="col-auto">
								<label
									htmlFor="password"
									className="col-form-label"
								>
									Password
								</label>
							</div>
							<div className="form-group">
								<input
									type="password"
									className="form-control rounded border border-dark"
									id="password"
									name="password"
									value={password}
									placeholder="Enter your password"
									onChange={onChange}
								/>
							</div>

							<div className="form-group text-center">
								<button
									type="submit"
									className="btn text-white"
									style={{ backgroundColor: '#81647C' }}
								>
									Login
								</button>
							</div>
						</div>
					</form>
				</section>
			</main>
		</>
	);
};
