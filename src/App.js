import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import AddProduct from './Pages/Dashboard/AddProduct';
import AddReview from './Pages/Dashboard/AddReview';
import AllUsers from './Pages/Dashboard/AllUsers';
import Dashborad from './Pages/Dashboard/Dashborad';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import MyOrders from './Pages/Dashboard/MyOrders';
import Myprofile from './Pages/Dashboard/Myprofile';
import AllProducts from './Pages/Home/AllProducts/AllProducts';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAdmin from './Pages/Login/RequireAdmin/RequireAdmin';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import AboutUs from './Pages/AboutUs/AboutUs';
import Purchase from './Pages/Purchase/Purchase';
import Footer from './Pages/Shared/Footer/Footer';
import Navbar from './Pages/Shared/Navbar/Navbar';
import NotFound from './Pages/Shared/NotFound/NotFound';
import ContactUs from './Pages/ContactUs/ContactUs';
import Carrier from './Pages/Carrier/Carrier';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/allproducts' element={<AllProducts></AllProducts>}></Route>
        <Route path='/purchase' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>
        <Route path='/purchase/:id' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashborad></Dashborad>
          </RequireAuth>
        }>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='review' element={<AddReview></AddReview>}></Route>
          <Route path='profile' element={<Myprofile></Myprofile>}></Route>
          <Route path='addProduct' element={<RequireAdmin>
            <AddProduct></AddProduct>
          </RequireAdmin>}></Route>
          <Route path='manageProducts' element={<RequireAdmin>
            <ManageProducts></ManageProducts>
          </RequireAdmin>}></Route>
          <Route path='manageOrders' element={<RequireAdmin>
            <ManageAllOrders></ManageAllOrders>
          </RequireAdmin>}></Route>
          <Route path='allUsers' element={<RequireAdmin>
            <AllUsers></AllUsers>
          </RequireAdmin>}></Route>
        </Route>
        <Route path='/blog' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/aboutUs' element={<AboutUs></AboutUs>}></Route>
        <Route path='/contactUs' element={<ContactUs></ContactUs>}></Route>
        <Route path='/carrier' element={<Carrier></Carrier>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
