import React from 'react';

export const Home = () => {
	return (
		<main className="App bg-books py-1 px-5">
			<section className="mainPage w-75 m-auto">
				<div className="mainPage shadow bg-body rounded bg-opacity-75">
					<h1 className="text-center pt-4">Welcome to BookOwl!</h1>
					<div className="d-flex justify-content-center">
						<img
							src="bookowl.png"
							className="m-3"
							style={{ width: 110 }}
						/>
					</div>
					<p className="text-center fs-4 m-2 p-2">
						BookOwl is a platform where you can loan books from
						other people as well as loan out your books to other
						people.
					</p>
					<p className="text-center fs-4 m-2 p-3 text-decoration-none">
						Get started by{' '}
						<a href="/register" className="text-decoration-none">
							Sign Up
						</a>{' '}
						or{' '}
						<a href="/login" className="text-decoration-none">
							{' '}
							Sign In{' '}
						</a>
						here or from the menu! You can browse some{' '}
						<a href="/search">books here!</a>.
					</p>
				</div>
			</section>
		</main>
	);
};
