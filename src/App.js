import './App.css';
import Customer from './components/customer/Customer';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Handyman from './components/handyman/Handyman';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Signup from "./components/SignUp/Signup"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard/" element={<Dashboard />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/handyman" element={<Handyman />} />
          <Route path="/adminSignup" element={<Signup />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
