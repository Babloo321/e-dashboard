import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Signup from './components/Signup';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<h1>Products listing</h1>} />
        <Route path='/product' element={<h1>Product path</h1>} />
        <Route path='/add' element={<h1>Add Product</h1>} />
        <Route path='/update' element={<h1>Update Products</h1>} />
        <Route path='/profile' element={<h1>Profile Page</h1>} />
        <Route path='/logout' element={<h1>Logout Page</h1>} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
