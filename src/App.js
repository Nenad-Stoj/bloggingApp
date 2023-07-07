import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  const likes = 50;
  const employment = { company: "DEPT Agency", position: "SFCC developer" }
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='content'>
          <Home />
          <p>liked {likes} times</p>
          <p>{employment.company}<br />{employment.position}</p>
        </div>
      </div>
    </Router>
  );
}

export default App;
