import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Appbar from './components/Appbar';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import ProductPage from './components/ProductPage';
import Shop from './components/Shop';
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';
import PrivateRoute, { PublicRoute } from './components/PrivateRoute';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {
  return (
    <div>
<BrowserRouter>
  <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/products' element={<Shop/>}/>
    <Route exact path='/cart' element={<Cart/>}/>
    <Route exact path='/checkout' element={<PrivateRoute><Checkout/></PrivateRoute>}/>
    <Route exact path='/login' element={<PublicRoute> <Login/> </PublicRoute>}/>
    <Route exact path='/register' element={<PublicRoute> <Register/></PublicRoute>}/>
    <Route exact path='/products/:id' element={<ProductPage/>}/>
  </Routes>
  <Footer/>
</BrowserRouter>
    </div>
  );
}

export default App;
