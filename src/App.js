import './App.css';
import Dashboard from './Dashboard/DashBoard/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <Router className='App'>
      <Dashboard />
    </Router>
  );
}

export default App;
