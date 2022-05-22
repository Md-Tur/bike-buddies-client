import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllProducts from './Pages/Home/AllProducts/AllProducts';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Navbar from './Pages/Shared/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/allproducts' element={<AllProducts></AllProducts>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
