import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';

export const Dashboard = () => {
	const navigate = useNavigate();
	const user = Cookies.get('access_token');
	const [getUser, setGetUser] = useState({});

	const checkUser = async () => {
		//User sends its access_token in headers to BE to be decoded.
		await axios
			.get(process.env.REACT_APP_API_URL + 'user/protected', {
				withCredentials: true,
				headers: {
					Authorization: `Bearer ${user}`,
				},
			})
			.then((res) => {
				if (res.data.user) {
					console.log(res.data.user);
					//Stores user info into the state.
					setGetUser(res.data.user);
				}
			});
	};

	useEffect(() => {
		if (!user) {
			navigate('/');
		} else {
			checkUser();
		}
	}, [user, navigate]);
	return (
		<div className="lightbrownbg">
			<section className="container">
				<div className="text-center p-5">
					<h1>Welcome {getUser.firstName}</h1>
					<p className="dashboard-p m-5">
						"A book is a gift you can open again and again"
					</p>
					<button className="btn btn-outline-secondary m-2">
						New Messages
					</button>
					<button className="btn btn-outline-secondary m-2">
						Settings
					</button>
				</div>
				<section>
					{/*  LOANED BOOKS */}
					<h3 className="text-center mt-5 mb-3">
						List of loaned books
					</h3>
					<div className="card shadow-lg p-3 mb-5">
						<table class="table table-hover">
							<thead>
								<tr>
									<th scope="col">Book Title</th>
									<th scope="col">Owner</th>
									<th scope="col">Return</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Boken om lilla ugglan</td>
									<td>Dimos</td>
									<td>
										<button className="btn btn-outline-danger btn-sm">
											Return
										</button>
									</td>
								</tr>
								<tr>
									<td>Ugglornas värld</td>
									<td>Filip</td>
									<td>
										<button className="btn btn-outline-danger btn-sm">
											Return
										</button>
									</td>
								</tr>
								<tr>
									<td>Sagan om de två ugglorna</td>
									<td>Frida</td>
									<td>
										<button className="btn btn-outline-danger btn-sm">
											Return
										</button>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</section>

				<section>
					{/*  MY BOOKSHELF */}
					<div className="text-center mt-5 mb-3">
						<h3 className="text-center">My bookshelf</h3>
						<button className="btn btn-outline-secondary m-3">
							Add new book
						</button>
					</div>
					<div className="card shadow-lg p-3 mb-5">
						<table class="table table-hover">
							<thead>
								<tr>
									<th scope="col">Book Title</th>
									<th scope="col">Action</th>
									<th scope="col">Status</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Ugglelexikonet</td>
									<td>
										<button className="btn btn-outline-danger btn-sm">
											Remove
										</button>
									</td>
									<td>
										<span class="badge badge-success">
											Available
										</span>
									</td>
								</tr>
								<tr>
									<td>Ugglornas magiska värld</td>
									<td>
										<button className="btn btn-outline-danger btn-sm">
											Remove
										</button>
									</td>
									<td>
										<span class="badge badge-danger">
											Unavailable
										</span>
									</td>
								</tr>
								<tr>
									<td>Owl Fight Club</td>
									<td>
										<button className="btn btn-outline-danger btn-sm">
											Remove
										</button>
									</td>
									<td>
										<span class="badge badge-success">
											Available
										</span>
									</td>
								</tr>
							</tbody>
						</table>						
					</div>
					<div className="text-center p-5">
					<p className="dashboard-p m-5">
					<button className='btn-danger btn-sm'>
							Delete my Account
							</button>
							</p>
							</div>
				</section>
			</section>
		</div>
	);
};
