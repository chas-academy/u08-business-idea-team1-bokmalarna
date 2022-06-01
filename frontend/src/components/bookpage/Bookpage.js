import React, { useEffect, useState } from 'react';
import Nav from '../nav/nav';
import Footer from '../footer/Footer';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const Bookpage = () => {
	const params = useParams();
	const [book, setBook] = useState({});

	const getBook = async () => {
		try {
			const res = await axios.get((process.env.REACT_APP_API_URL + 'book/' + params.id));
			setBook(res.data);
			console.log(res.data);
		} catch (e) {
			console.log(e);
		}
	};

	
	useEffect(() => {
		getBook();
	},[]);

	return (
		<div className="lightbrownbg">
			<section className="container text-center p-5">
				<div className="card shadow-lg d-flex align-items-center">
					<h2 className="m-4 fw-bold">{ book.title }</h2>
					<img
						className="rounded mx-auto d-block m-3"
						src="https://www.kathrynlasky.com/assets/covers/owl3.jpg"
						style={{ width: '50%', height: 'auto' }}
						alt="Book"
					/>
					<h3>Description:</h3>
					<div className="container-sm">
						<p className="card-body mx-5">
							{ book.description }
						</p>

						<p>Author: { book.author }</p>
						<p>Genre: { book.genre }</p>
						<p>Condition: { book.condition }</p>
						<p>Release Date: { new Date(book.released).toLocaleDateString()}</p>

						<p>Owned by: Ugglemor</p>

						<button className="btn btn-outline-secondary purple text-white m-3">
							Borrow
						</button>
					</div>
				</div>
			</section>
		</div>
	);
};
