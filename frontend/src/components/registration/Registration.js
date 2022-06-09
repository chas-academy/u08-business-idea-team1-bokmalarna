import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Registration = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		city: '',
		email: '',
		password: '',
		confirmPassword: '',
	});
	const [formErrors, setFormErrors] = useState({});
	const [error, setError] = useState(true);
	const [submitted, setSubmitted] = useState(false);
	const { firstName, lastName, city, email, password, confirmPassword } =
		formData;

	const onChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const onSubmit = (e) => {
		e.preventDefault();
		setFormErrors(validate(formData));
		setSubmitted(true);
	};

	useEffect(() => {
		if (error === false) {
			register(formData);
		}
	}, [error]);

	const validate = (values) => {
		// Empty errors object - data is added if the form is not filled out properly
		const errors = {};
		// Regular expression to validate the email format:
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

		// Display error messages if the user submits incorrect data in the form and stop registration from succeeding
		if (!values.firstName) {
			errors.firstName = 'First name is required!';
			setError(true);
		}
		if (!values.lastName) {
			errors.lastName = 'Last name is required!';
			setError(true);
		}
		if (!values.city) {
			errors.city = 'City is required!';
			setError(true);
		}
		if (!values.email) {
			errors.email = 'Email is required!';
			setError(true);
		} else if (!regex.test(values.email)) {
			errors.email = 'Not a valid email format!';
			setError(true);
		}
		if (!values.password) {
			errors.password = 'Password is required!';
			setError(true);
		} else if (values.password.length < 6) {
			errors.password = 'Password must be more than 6 characters!';
			setError(true);
		}
		if (!values.confirmPassword) {
			errors.confirmPassword = 'Password confirmation is required!';
			setError(true);
		} else if (values.confirmPassword !== values.password) {
			errors.confirmPassword = 'Must be identical to password!';
			setError(true);
		}

		if (Object.keys(errors).length === 0) {
			setError(false);
		}
		return errors;
	};

	const successmessage = () => {
		alert('Registration successful!');
		navigate('/login');
	};

	const register = async (userData) => {
		await axios
			.post(process.env.REACT_APP_API_URL + 'user/register', userData)
			.then((res) => {
				console.log('User Registered!');
			});
	};

	return (
		<main className="App bg-books py-5 px-4">
			<section className="container shadow bg-body rounded border border-dark bg-opacity-75 pb-4">
				<h1 className="text-center pt-5 display-1 fw-normal">
					Sign Up
				</h1>
				{Object.keys(formErrors).length === 0 && submitted ? (
					successmessage()
				) : (
					<></>
				)}
				<form className="row g-3 fw-bold">
					<div className="col-md-6">
						<label htmlFor="firstName" className="form-label">
							First name
						</label>
						<p>{formErrors.firstName}</p>
						<input
							type="text"
							className="form-control"
							id="firstName"
							name="firstName"
							value={firstName}
							onChange={onChange}
						/>
					</div>

					<div className="col-md-6">
						<label htmlFor="lastName" className="form-label">
							Last name
						</label>
						<p>{formErrors.lastName}</p>
						<input
							type="text"
							className="form-control"
							id="lastName"
							name="lastName"
							value={lastName}
							onChange={onChange}
						/>
					</div>

					<div className="col-12">
						<label htmlFor="city" className="form-label">
							City of residence
						</label>
						<p>{formErrors.city}</p>
						<input
							type="text"
							className="form-control"
							id="city"
							name="city"
							value={city}
							onChange={onChange}
						/>
					</div>

					<div className="col-12">
						<label htmlFor="email" className="form-label">
							Email
						</label>
						<p>{formErrors.email}</p>
						<input
							type="email"
							className="form-control"
							id="email"
							name="email"
							value={email}
							onChange={onChange}
						/>
					</div>

					<div className="col-md-6">
						<label htmlFor="password" className="form-label">
							Password
						</label>
						<p>{formErrors.password}</p>
						<input
							type="password"
							className="form-control"
							id="password"
							name="password"
							value={password}
							onChange={onChange}
						/>
					</div>

					<div className="col-md-6">
						<label htmlFor="confirmPassword" className="form-label">
							Confirm Password
						</label>
						<p>{formErrors.confirmPassword}</p>
						<input
							type="password"
							className="form-control"
							id="confirmPassword"
							name="confirmPassword"
							value={confirmPassword}
							onChange={onChange}
						/>
					</div>

					<div className="col-12 pt-4 text-center">
						<button
							type="submit"
							className="btn btn-primary btn-lg"
							style={{
								backgroundColor: '#81647C',
								borderColor: '#81647C',
							}}
							onClick={onSubmit}
						>
							Register User
						</button>
					</div>
				</form>
			</section>
		</main>
	);
};
