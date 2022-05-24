import React from 'react';

export const Home = () => {
	return (
		<main className="App bg-books">
			<section className="container shadow bg-body rounded my-5 bg-opacity-75">
				<h1 className="text-center pt-5 display-1 fw-normal">Welcome To</h1>
				<div className="d-flex justify-content-center my-5">
					<img
						src="https://i.imgur.com/S8WCatY.png"
						alt="BookOwl Logo"
					/>
				</div>
				<h2 className="text-center mt-5 mb-5 display-2 fw-normal ">BookOwl</h2>
				<p className="text-center fs-2">
					Here you can borrow books from other people or loan your
					books to other people
				</p>
				<div className="text-center my-5">
					<h3 className="fs-2" >Get started by</h3>
					<p className="pb-5 fs-3">
						Sign in
						<br />
						or
						<br />
						Register
					</p>
				</div>
			</section>
		</main>
	);
};
