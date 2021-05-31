import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Cart from './Components/Home/Cart/Cart';
import Shop from './Components/Shop/Shop/Shop';

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/viewCart">
            <Cart></Cart>
          </Route>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
