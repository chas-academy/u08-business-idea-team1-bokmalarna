import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie';

export const Bookpage = () => {
	const params = useParams();
	const user = Cookies.get('access_token');
	const [book, setBook] = useState({});
	const [owner, setOwner] = useState('');
	const [borrowed, setBorrowed] = useState(false);
	const [getUser, setGetUser] = useState({});

	const getBook = async () => {
		try {
			const res = await axios.get(
				process.env.REACT_APP_API_URL + 'book/' + params.id
			);
			setBook(res.data);
			console.log(res.data);
		} catch (e) {
			console.log(e);
		}
	};

	const getOwner = async (id) => {
		// const ownerId = book.owner;
		try {
			const res = await axios.get(
				process.env.REACT_APP_API_URL + 'user/' + `${id}`
			);
			// Return the owners first name
			setOwner(res.data);
		} catch (e) {
			console.log(e);
		}
	};

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

	const OnBorrow = () => {};

	useEffect(() => {
		if (user) {
			checkUser();
		}
		getBook();
		if (book) {
			if (book.owner) {
				getOwner(book.owner);
				console.log(book.owner);
			}
		}
		console.log(book.borrower);
		if (book.borrower === undefined || book.borrower === null) {
			setBorrowed(true);
		} else {
			setBorrowed(false);
		}
	}, [book.owner, book.borrower]);

	return (
		<div className="lightbrownbg">
			<section className="container text-center p-5">
				<div className="card shadow-lg d-flex align-items-center">
					<h2 className="m-4 fw-bold">{book.title}</h2>
					<img
						className="rounded mx-auto d-block m-3"
						src="https://www.kathrynlasky.com/assets/covers/owl3.jpg"
						style={{ width: '50%', height: 'auto' }}
						alt="Book"
					/>
					<h3>Description:</h3>
					<div className="container-sm">
						<p className="card-body mx-5">{book.description}</p>

						<p>Author: {book.author}</p>
						<p>Genre: {book.genre}</p>
						<p>Condition: {book.condition}</p>
						<p>
							Release Date:{' '}
							{new Date(book.released).toLocaleDateString()}
						</p>
						<p>Owned by: {owner.bookOwner}</p>
						{borrowed ? (
							<button
								className="btn btn-primary text-white m-3 btn-lg"
								style={{ backgroundColor: '#81647C' }}
								onClick={OnBorrow()}
							>
								Borrow
							</button>
						) : (
							<p className="p-3 mb-2 bg-danger text-white">
								Book is already borrowed
							</p>
						)}
					</div>
				</div>
			</section>
		</div>
	);
};
