import './App.css';
import Nav from './components/Nav'
import Footer from './components/Footer'
import SignUp from './components/SignUp';
import Login from './components/Login';
import AddProduct from './components/addProduct';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import PrivateComponent from './components/privateComponent';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
     <Routes>
        <Route element = {<PrivateComponent />}>
        <Route path = "/" element = {<h1>Prodcut Listing Components</h1>} />
        <Route path = "/add" element = {<AddProduct />} />
        <Route path = "/update" element = {<h1>Update Prodcut Components</h1>} />
        <Route path = "/logout" element = {<h1>Logout Components</h1>} />
        <Route path = "/profile" element = {<h1>Profile Components</h1>} />
     </Route>

        <Route path = "/signup" element = {<SignUp />} />
        <Route path = "/login" element = {<Login />} />    It is out of protected route so it can be accessed from the sign up page also  
     </Routes>

      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
