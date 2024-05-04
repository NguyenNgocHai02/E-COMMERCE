
import AdminDefaulLayout from './Admin/Page/AdminDefaulLayout';
import ProductManage from './Admin/Page/ProductManage';
import RegisterAdmin from './Admin/Page/RegisterAdmin';
import LoginAdmin from './Admin/Page/LoginAdmin';
import './App.css';
import { AuthContext } from './context/AuthContext';
import { useContext } from 'react';
import {Routes, Route} from 'react-router-dom'
import DefaulLayout from './client/Page/DefaulLayout';
function App() {
  const {user}=useContext(AuthContext);
  console.log(user)
  return (
    <Routes>
      <Route path='/' element={<DefaulLayout/>}>

      </Route>
      <Route path='/admin'>
      <Route path='register' element={<RegisterAdmin/>}/>
      <Route path='login' element={<LoginAdmin/>}/>
      <Route path='' element={user?<AdminDefaulLayout/>:<LoginAdmin/>}>
        <Route path='' element={<ProductManage/>}/>

      </Route>
      </Route>
      
    </Routes>
  );
}

export default App;
