// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Signup from"./components/Signup.js";
import Login from"./components/Login.js";
import Dashboard from"./pages/Dashboard.js";


function App() {
  return (
   <Router>
    <Routes>
      <Route path="/Signup" element={<Signup/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Dashboard" element={<Dashboard/>} />
      <Route path="/" element={<Login/>} />
    </Routes>
   </Router>
  );
}

export default App;
