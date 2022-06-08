import React from 'react';

export const Home = () => {
	return (
		<main className="App bg-books py-5 px-4">
			<section className="mainPage container shadow bg-body rounded bg-opacity-75">
				<h1 className="text-center pt-4">Welcome to BookOwl!</h1>
				<div className="d-flex justify-content-center">
					<img
						src="bookowl.png"
						className="m-3"
						style={{ width: 110 }}
					/>
				</div>
				<p className="text-center fs-4 m-2 p-2">
					BookOwl is a platform where you can loan books from other
					people as well as loan out your books to other people.
				</p>
				<p className="text-center fs-4 m-2 p-3">
					Get started by <a href="/register">register an account</a>{' '}
					or <a href="/login">login</a>
					from the menu!
				</p>
			</section>
		</main>
	);
};
