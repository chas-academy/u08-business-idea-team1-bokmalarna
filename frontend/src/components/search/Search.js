import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

export const Search = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [location, setLocation] = useState('');
	const [genre, setGenre] = useState('Genres');
	const [books, setBooks] = useState([]);
	const user = Cookies.get('access_token');
	const [getUser, setGetUser] = useState({});
	const [introText, setintroText] = useState('');

	useEffect(() => {
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
						//Stores user info into the state.
						setGetUser(res.data.user);
					}
				});
		};
		if (user) {
			checkUser();
			if (getUser.city) {
				axios
					.get(
						`${process.env.REACT_APP_API_URL}book/search=${searchTerm}&location=${getUser.city}&genre=${genre}`
					)
					.then((res) => {
						setBooks(res.data);
						setintroText('Books available in your city');
					});
			}
		} else {
			axios
				.get(`${process.env.REACT_APP_API_URL}book/`)
				.then((res) => setBooks(res.data.book));
			setintroText('Recommended books for you');
		}
	}, [user, getUser.city, genre, searchTerm]);

	const searchBooks = async () => {
		const res = await axios.get(
			`${process.env.REACT_APP_API_URL}book/search=${searchTerm}&location=${location}&genre=${genre}`
		);
		setBooks(res.data);
		setintroText('Search results:');
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		searchBooks(searchTerm, location);
	};

	return (
		<div className="lightbrownbg pt-3 p-5 min-vh-100">
			<section className="container my-5 rounded">
				<section className="my-5 row">
					<h2 className="fw-bold text-center pb-5">Browse books</h2>
					<form className="d-flex flex-column justify-content-center">
						<div className="mb-3 col">
							<input
								type="text"
								className="form-control p-3"
								id="formGroupExampleInput"
								placeholder="Search for a book or an author..."
								onChange={(e) => {
									setSearchTerm(e.target.value);
								}}
							/>
						</div>
						<div className="d-flex">
							<input
								type="text"
								className="form-control w-50 m-1"
								id="location"
								placeholder="Filter by city"
								onChange={(e) => setLocation(e.target.value)}
							/>
							<select
								className="form-select form-select-sm w-50 m-1"
								aria-label=".form-select-sm example"
								value={genre}
								onChange={(e) => setGenre(e.target.value)}
							>
								<option defaultValue>Genres</option>
								<option value="fantasy">Fantasy</option>
								<option value="sci-Fi">Sci-Fi</option>
								<option value="mystery">Mystery</option>
								<option value="thriller">Thriller</option>
								<option value="romance">Romance</option>
								<option value="cookbook">Cookbook</option>
								<option value="health">Health/fitness</option>
								<option value="philosophy">Philosophy</option>
								<option value="crime">Crime</option>
								<option value="travel">Travel</option>
								<option value="action">
									Action and Adventure
								</option>
								<option value="history">History</option>
								<option value="children">
									Childrens books
								</option>
								<option value="comic">Comic</option>
								<option value="drama">Drama</option>
								<option value="horror">Horror</option>
								<option value="poetry">Poetry</option>
								<option value="young">Young adult</option>
							</select>
							<button
								type="submit"
								className="btn btn-primary m-1"
								onClick={handleSubmit}
							>
								Search
							</button>
						</div>
					</form>
				</section>
				<section className="container">
					<h3 className="text-center">{introText}</h3>
					<div className="row justify-content-center p-3">
						{books.map((book) => {
							return (
								<div
									className="card shadow-lg rounded m-3"
									style={{ width: '18rem' }}
									key={book._id}
								>
									<img
										src={
											process.env.REACT_APP_API_URL +
											`uploads/${book.image}`
										}
										style={{ height: '16rem' }}
										className="card img-fluid pt-2"
										alt="..."
									/>
									<div className="card-body">
										<h5 className="card-title text-center">
											{book.title}
										</h5>
										<div className="d-flex justify-content-center align-items-center pt-4">
											<a
												href={'/bookpage/' + book._id}
												className="btn btn-primary"
											>
												Visit book
											</a>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</section>
			</section>
		</div>
	);
};
