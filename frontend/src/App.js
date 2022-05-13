import logo from './logo.svg';
import './App.css';
import { Addbook } from './components/addbook/Addbook';
import { Bookpage } from './components/bookpage/Bookpage';
import { Dashboard } from './components/dashboard/Dashboard';
import { Login } from './components/login/Login';
import { Registration } from './components/registration/Registration';
import { Search } from './components/search/Search';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
