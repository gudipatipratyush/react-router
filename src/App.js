import React, { Component } from 'react';
import { BrowserRouter as Router , Route} from 'react-router-dom';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Contact from './pages/contact.jsx';
import '../src/App.css';
class App extends Component {
  render() {
    return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route  path="/about" component={About} />
        <Route  path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
