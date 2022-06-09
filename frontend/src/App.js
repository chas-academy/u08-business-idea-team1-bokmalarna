import Cookies from 'js-cookie';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import { Login } from './components/login/Login';
import { Registration } from './components/registration/Registration';
import { Search } from './components/search/Search';
import { Dashboard } from './components/dashboard/Dashboard';
import { Bookpage } from './components/bookpage/Bookpage';
import { Addbook } from './components/addbook/Addbook';
import { Edit } from './components/edit/Edit';
import { Messenger } from './components/messenger/Messenger';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Home } from './components/Home/Home';
import Footer from './components/footer/Footer';
import Editbook from './components/edit/Editbook';

function App() {
<<<<<<< HEAD

=======
>>>>>>> development
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
<<<<<<< HEAD
				<Navbar className="darkbrown-nav shadow-lg" collapseOnSelect expand="lg">
=======
				<Navbar
					className="darkbrown-nav shadow-lg"
					collapseOnSelect
					expand="lg"
					variant="dark"
				>
>>>>>>> development
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
<<<<<<< HEAD
									Search
=======
									Browse
>>>>>>> development
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
<<<<<<< HEAD
										Log In
=======
										Sign In
>>>>>>> development
									</Nav.Link>
									<Nav.Link
										style={{ color: 'white' }}
										eventKey={2}
										href="/register"
									>
<<<<<<< HEAD
										Register
=======
										Sign Up
>>>>>>> development
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
<<<<<<< HEAD
					<Route path="/edit/password" element={<EditPassword />} />
					<Route path="delete" element={<deleteUser />} />
=======
					<Route path="/editbook/:id" element={<Editbook />} />
					<Route path="/messenger" element={<Messenger />} />
>>>>>>> development
				</Routes>
			</div>
			<Footer />
		</div>
	);
<<<<<<< HEAD

  /* const user = Cookies.get("access_token");
  //Logout
  const onLogout = async () => {
    //Send token info in headers to backend to let user logout. Backend will remove HTTPOnly cookies
    await axios
      .get(process.env.REACT_APP_API_URL + "user/logout", {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${user}`,
        },
      })
      .then((res) => {
        //FrontEnd removed access_token from cookies("localstorage").
        Cookies.remove("access_token");
        console.log(res.data);
        window.location.reload();
      });
  };
  return (
    <div className="App">
      <>
        <Navbar
          className="darkbrown-nav shadow-lg"
          collapseOnSelect
          expand="lg"
          variant="dark"
        >
          <Container>
            <Navbar.Brand style={{ color: "white" }} href="/">
              BookOwl
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link style={{ color: "white" }} href="/search">
                  Search
                </Nav.Link>
                {user && (
                  <Nav.Link href="/dashboard" style={{ color: "white" }}>
                    Dashboard
                  </Nav.Link>
                )}
              </Nav>
              {user ? (
                <Nav>
                  <Nav.Link onClick={onLogout} style={{ color: "white" }}>
                    Log Out
                  </Nav.Link>
                </Nav>
              ) : (
                <Nav>
                  <Nav.Link style={{ color: "white" }} href="/login">
                    Log In
                  </Nav.Link>
                  <Nav.Link
                    style={{ color: "white" }}
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
		  <Route path="/editbook/:id" element={<Editbook />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
>>>>>>> development */
=======
>>>>>>> development
}

export default App;
