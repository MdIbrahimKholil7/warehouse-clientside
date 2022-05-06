import './App.css';

import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Shared/Header/Header';
import Home from './components/Home/Home/Home';
import Footer from './components/Shared/Footer/Footer';
import ProductDetails from './components/ProductDetails/ProductDetails';
import MangeItems from './components/MangeItems/MangeItems';
import AddItem from './components/AddItem/AddItem';
import Register from './components/UserForm/Register/Register';
import Login from './components/UserForm/Login/Login';
import RequireAuth from './components/RequireAuth/RequireAuth';
import VerifyEmail from './components/VerfiyEmail/VerifyEmail';
import MyItems from './components/MyItems/MyItems';
import Blog from './components/Blog/Blog';

function App() {
  return (
    <div className="App">
      <Header/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/blog' element={<Blog/>}/>
       <Route path='/productDetails/:id' element={<RequireAuth><ProductDetails/></RequireAuth>}/>
       <Route path='/mangeItems' element={
         <RequireAuth><MangeItems/></RequireAuth>
       }/>
       <Route path='/addItem' element={<AddItem/>}/>
       <Route path='/register' element={<Register/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/verfiyEmail' element={<VerifyEmail/>}/>
       <Route path='/myItems' element={<RequireAuth><MyItems/></RequireAuth>}/>
     </Routes>
     <Footer/>

    </div>
  );
}

export default App;
