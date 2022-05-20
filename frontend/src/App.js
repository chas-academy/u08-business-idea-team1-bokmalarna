import './App.css';
import { Addbook } from './components/addbook/Addbook';
import { Bookpage } from './components/bookpage/Bookpage';
import { Dashboard } from './components/dashboard/Dashboard';
import { Login } from './components/login/Login';
import { Registration } from './components/registration/Registration';
import { Search } from './components/search/Search';
import { Nav } from './components/nav/nav';
import { Footer } from './components/footer/Footer';

function App() {
	return (
		<div className="App bg-books">
			<header>
				<Nav />
			</header>
			<main className="my-5">
				<section className="container shadow bg-body rounded my-5 opacity-75">
					<h1 className="text-center pt-5">Welcome To</h1>
					<div className="d-flex justify-content-center my-5">
						<img
							src="https://i.imgur.com/S8WCatY.png"
							alt="BookOwl Logo"
						/>
					</div>
					<h2 className="text-center mt-5">BookOwl</h2>
					<p className="text-center">
						Here you can borrow books from other people or loan your
						books to other people
					</p>
					<div className="text-center my-5">
						<h3>Get started by</h3>
						<p className="pb-5">
							Sign in
							<br />
							or
							<br />
							Register
						</p>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}

export default App;
