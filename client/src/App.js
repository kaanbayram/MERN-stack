import React,{ Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Content from './components/Content';
import { Provider } from 'react-redux';
import store from './store';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Addadvert from './components/Addadvert';

class App extends Component {
  
  render() {
    //console.log("kaan baba geldi");
  return (
    <Router>
    <Provider store={store}>
      
    <div className="App">
        
      <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/Addadvert' component={Addadvert} />
      </Switch>
    </div>
    
    </Provider>
    </Router>

  );
  }
}

export default App;
