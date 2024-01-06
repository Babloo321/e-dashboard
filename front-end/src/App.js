import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Signup from './components/Signup';
import Login from './components/Login';
import AddProduct from './components/AddProduct'
import PrivateComp from './components/Privatecomp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>

        <Route path='' element={<PrivateComp/>} >
        <Route path='/' element={<h1>Products listing</h1>} />
        <Route path='/product' element={<h1>Product path</h1>} />
        <Route path='/add' element={<AddProduct />} />
        <Route path='/update' element={<h1>Update Products</h1>} />
        <Route path='/profile' element={<h1>Profile Page</h1>} />
        
        <Route path='/logout' element={<h1>Logout Page</h1>} />
        </Route>
        
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
