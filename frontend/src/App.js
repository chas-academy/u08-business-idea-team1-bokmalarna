import Cookies from "js-cookie";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import { Login } from "./components/login/Login";
import { Registration } from "./components/registration/Registration";
import { Search } from "./components/search/Search";
import { Dashboard } from "./components/dashboard/Dashboard";
import { Bookpage } from "./components/bookpage/Bookpage";
import { Addbook } from "./components/addbook/Addbook";
import { Edit } from "./components/edit/Edit";
import { EditPassword } from "./components/edit/Editpassword";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Home } from "./components/Home/Home";
import Footer from "./components/footer/Footer";

function App() {
	const user = Cookies.get('access_token');
	//Logout
	const onLogout = async () => {
		//Send token info in headers to backend to let user logout. Backend will remove HTTPOnly cookies
		await axios
			.get(process.env.REACT_APP_API_URL + 'user/logout', {
				withCredentials: true,
				headers: {
					Authorization: `Bearer ${user}`,
				},
			})
			.then((res) => {
				//FrontEnd removed access_token from cookies("localstorage").
				Cookies.remove('access_token');
				console.log(res.data);
				window.location.reload();
			});
	};
	return (
		<div className="App">
			<>
				<Navbar className="darkbrown-nav shadow-lg" collapseOnSelect expand="lg">
					<Container>
						<Navbar.Brand style={{ color: 'white' }} href="/">
							BookOwl
						</Navbar.Brand>
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav className="me-auto">
								<Nav.Link
									style={{ color: 'white' }}
									href="/search"
								>
									Search
								</Nav.Link>
								{user && (
									<Nav.Link
										href="/dashboard"
										style={{ color: 'white' }}
									>
										Dashboard
									</Nav.Link>
								)}
							</Nav>
							{user ? (
								<Nav>
									<Nav.Link
										onClick={onLogout}
										style={{ color: 'white' }}
									>
										Log Out
									</Nav.Link>
								</Nav>
							) : (
								<Nav>
									<Nav.Link
										style={{ color: 'white' }}
										href="/login"
									>
										Log In
									</Nav.Link>
									<Nav.Link
										style={{ color: 'white' }}
										eventKey={2}
										href="/register"
									>
										Register
									</Nav.Link>
								</Nav>
							)}
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</>
			<div>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Registration />} />
					<Route path="/search" element={<Search />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/bookpage/:id" element={<Bookpage />} />
					<Route path="/addbook" element={<Addbook />} />
					<Route path="/edit" element={<Edit />} />
					<Route path="/edit/password" element={<EditPassword />} />
				</Routes>
			</div>
			<Footer />
		</div>
	);
}

export default App;
