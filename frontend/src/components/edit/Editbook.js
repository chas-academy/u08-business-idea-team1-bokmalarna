import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Editbook = () => {
	const [userInput, setUserInput] = useState({
		title: '',
		author: '',
		description: '',
		genre: '',
		condition: '',
		release: '',
	});
	const [bookInfo, setBookInfo] = useState([]);
	const params = useParams();

	const onChange = (e) => {
		setUserInput((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const { title, author, description, genre, condition, release } = userInput;

	useEffect(() => {
		const id = params.id;

		const getBook = async (id) => {
			await axios
				.get(process.env.REACT_APP_API_URL + `book/${id}`)
				.then((res) => {
					setBookInfo(res.data);
					setUserInput({
						title: bookInfo.title,
						author: bookInfo.author,
						description: bookInfo.description,
						genre: bookInfo.genre,
						condition: bookInfo.condition,
						release: bookInfo.release,
					});
				});
		};
		getBook(id);
	}, [
		bookInfo.author,
		bookInfo.condition,
		bookInfo.description,
		bookInfo.genre,
		bookInfo.release,
		bookInfo.title,
		params.id,
	]);

	const onSubmit = (e) => {
		e.preventDefault();

		const bookData = {
			title,
			author,
			description,
			genre,
			condition,
			release,
		};
		updateBook(bookData);
	};

	const updateBook = async (bookData) => {
		const id = params.id;
		await axios
			.put(process.env.REACT_APP_API_URL + `book/${id}`, bookData)
			.then((res) => {
				console.log('Book updated successfully', res);
			});
	};

	return (
		<section className="lightbrownbg">
			<div className="container text-center p-5">
				<form
					method="POST"
					className="card shadow-lg d-flex align-items-center"
				>
					<h2 className="m-4 fw-bold">Edit book</h2>
					<label className="mt-3 mb-1">Title</label>
					<input
						className="form-control w-50"
						type="text"
						name="title"
						onChange={onChange}
						value={title}
					/>

					<label className="mt-3 mb-1">Author</label>
					<input
						className="form-control w-50"
						type="text"
						name="author"
						onChange={onChange}
						value={author}
					/>

					<label className="mt-3 mb-1">Description</label>
					<input
						className="form-control w-50"
						type="text"
						name="description"
						onChange={onChange}
						value={description}
					/>

					<label className="mt-3 mb-1" htmlFor="genre">
						Genre
					</label>
					<select
						className="form-select w-50 text-center"
						name="genre"
						onChange={onChange}
						value={genre}
					>
						<option></option>
						<option>Biography</option>
						<option>Autobiography</option>
						<option>Cookbook</option>
						<option>Health/fitness</option>
						<option>Philosophy</option>
						<option>Crime</option>
						<option>Travel</option>
						<option>Action and Adventure</option>
						<option>History</option>
						<option>Childrens books</option>
						<option>Comic</option>
						<option>Drama</option>
						<option>Fantasy</option>
						<option>Horror</option>
						<option>Poetry</option>
						<option>Romance</option>
						<option>Science fiction</option>
						<option>Thriller</option>
						<option>Young adult</option>
					</select>

					<label className="mt-3 mb-1" htmlFor="condition">
						Condition
					</label>
					<input
						className="form-control w-50"
						type="text"
						name="condition"
						onChange={onChange}
						value={condition}
					/>

					<label className="mt-3 mb-1" htmlFor="release">
						Release Date
					</label>
					<input
						className="form-control w-50 text-center"
						type="date"
						name="release"
						onChange={onChange}
						value={release}
					/>

					<div className="mt-2">
						<a
							className="btn btn-outline-secondary bg-danger text-white m-3"
							href="/dashboard"
						>
							Cancel
						</a>
						<button
							className="btn btn-outline-secondary purple text-white m-3"
							type="submit"
							onClick={onSubmit}
						>
							Add book
						</button>
					</div>
				</form>
			</div>
		</section>
	);
};

export default Editbook;
