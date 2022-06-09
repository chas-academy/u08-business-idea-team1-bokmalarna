import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Dashboard = () => {
	const navigate = useNavigate();
	const user = Cookies.get('access_token');
	const [getUser, setGetUser] = useState({});
	const [books, setBooks] = useState([]);
	const [borrowed, setBorrowed] = useState([]);

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

	//Get users uploaded books
	const getBooks = async (id) => {
		await axios
			.get(process.env.REACT_APP_API_URL + `book/user/${id}`)
			.then((res) => {
				if (res.data) {
					console.log('users books: ', res.data.message);
					setBooks(res.data.message);
				}
			});
	};

	//Get users borrowed books
	const borrowedBooks = async (id) => {
		await axios
			.get(process.env.REACT_APP_API_URL + `book/borrowed/${id}`)
			.then((res) => {
				if (res.data) {
					console.log('borrowed books: ', res.data.message);
					setBorrowed(res.data.message);
				}
			});
	};

	//Return borrowed book
	const returnBook = async (id) => {
		const newBorrower = JSON.stringify({ borrower: null });
		await axios
			.put(process.env.REACT_APP_API_URL + `book/${id}`, newBorrower, {
				headers: { 'Content-Type': 'application/json' },
			})
			.then((res) => {
				console.log(res.data);
				window.location.reload();
			});
	};

	// Start a chat conversation
	const startChat = async (senderId, receiverId) => {
		if (senderId && receiverId) {
			const chatMembers = {
				senderId: senderId,
				recieverId: receiverId,
			};
			console.log(chatMembers);
			try {
				await axios
					.post(
						process.env.REACT_APP_API_URL + 'conversations/',
						chatMembers,
						{
							headers: { 'Content-Type': 'application/json' },
						}
					)
					.then(() => {
						console.log('New conversation created');
						navigate('/messenger');
					});
			} catch (error) {
				console.log(error);
			}
		}
	};

	//Delete user book
	const deleteBook = async (id) => {
		console.log(id);
		await axios
			.delete(process.env.REACT_APP_API_URL + `book/${id}`)
			.then((res) => {
				window.location.reload();
				console.log(res.data.message);
			});
	};

	// When dashboard loads, it will fetch the users: Information, Books and loaned books
	useEffect(() => {
		if (!user) {
			navigate('/');
		} else {
			checkUser();
			//After checkusers runs, it will return a user id which will be stored inside getUser state.
			if (getUser.id) {
				//If getUser has a id stored, it will then run the two functions.
				getBooks(getUser.id);
				borrowedBooks(getUser.id);
			}
		}
	}, [getUser.id]);

	return (
		<div className="lightbrownbg pb-3">
			<section className="container">
				<div className="text-center p-5">
					<h1>Welcome {getUser.firstName}</h1>
					<p className="dashboard-p m-5">
						"A book is a gift you can open again and again"
					</p>
					<Link
						to="/messenger"
						className="btn btn-outline-secondary m-2"
					>
						Messages
					</Link>
					<Link to="/edit" className="btn btn-outline-secondary m-2">
						Settings
					</Link>
				</div>
				<section>
					{/*  LOANED BOOKS */}
					<h3 className="text-center mt-5 mb-3">
						List of loaned books
					</h3>
					<div className="card shadow-lg p-3 mb-5">
						<div className="table-responsive">
							<table className="table table-hover">
								<thead>
									<tr>
										<th scope="col">Book Title</th>
										<th scope="col">Owner</th>
										<th scope="col">Return</th>
										<th scope="col">Contact</th>
									</tr>
								</thead>
								<tbody>
									{/* After fetching users borrowed books, they will be displayed here */}
									{borrowed.map((borrow, index) => (
										<tr key={index}>
											<td>
												<a
													className="text-black"
													href={
														'/bookpage/' +
														borrow._id
													}
												>
													{borrow.title}
												</a>
											</td>
											<td>
												{borrow.owner.firstName}{' '}
												{borrow.owner.lastName}
											</td>
											<td>
												<button
													className="btn btn-outline-danger btn-sm"
													onClick={() => {
														returnBook(borrow._id);
													}}
												>
													Return
												</button>
											</td>
											<td>
												<button
													className="custom-btn custom-btn-border btn-sm"
													onClick={() => {
														startChat(
															borrow.borrower,
															borrow.owner._id
														);
													}}
												>
													Chat
												</button>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</section>

				<section>
					{/*  MY BOOKSHELF */}
					<div className="text-center mt-5 mb-3">
						<h3 className="text-center">My bookshelf</h3>
						<Link
							to="/addbook"
							className="btn btn-success"
							style={{
								backgroundColor: '#81647C',
								borderColor: '#81647C',
							}}
						>
							Add book
						</Link>
					</div>
					<div className="card shadow-lg p-3 mb-5">
						<div className="table-responsive">
							<table className="table">
								<thead>
									<tr>
										<th scope="col">Book Title</th>
										<th scope="col">Action</th>
										<th scope="col">Status</th>
										<th scope="col">Contact</th>
									</tr>
								</thead>
								<tbody>
									{/* After fetching users books, they will be displayed here */}
									{books.map((book, index) => (
										<tr key={index}>
											<td>
												<a
													className="text-black"
													href={
														'/bookpage/' + book._id
													}
												>
													{book.title}
												</a>
											</td>
											<td className="d-flex gap-2">
												<a
													className="btn btn-success btn-sm"
													href={
														'editbook/' + book._id
													}
													style={{
														backgroundColor:
															'#638251',
														borderColor: '#638251',
													}}
												>
													Edit
												</a>
												<button
													className="btn btn-danger btn-sm"
													onClick={() => {
														deleteBook(book._id);
													}}
												>
													Remove
												</button>
											</td>
											<td>
												{book.borrower ? (
													<span className="btn btn-danger btn-sm">
														Not Available
													</span>
												) : (
													<span
														className="btn btn-success btn-sm"
														style={{
															backgroundColor:
																'#638251',
															borderColor:
																'#638251',
														}}
													>
														Available
													</span>
												)}
											</td>
											<td>
												<button
													className="btn btn-success btn-sm"
													style={{
														backgroundColor:
															'#81647C',
														borderColor: '#81647C',
													}}
													onClick={() => {
														startChat(
															book.owner,
															book.borrower
														);
													}}
												>
													Chat
												</button>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</section>
			</section>
		</div>
	);
};
