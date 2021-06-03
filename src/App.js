import react from 'react';
import Dashboard from './Dashboard/DashBoard/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Cart from './Components/Home/Cart/Cart';
import Shop from './Components/Shop/Shop/Shop';
import BlogPage from './Components/BlogPage/BlogPage/BlogPage';



function App() {
  return (
    <Router>
        <Switch>
           <Route><Dashboard /></Route>
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
          <Route path="/blog">
            <BlogPage></BlogPage>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
