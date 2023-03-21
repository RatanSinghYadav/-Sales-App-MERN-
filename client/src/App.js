import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Add from './component/addSales';
import Home from '../src/component/home';
import Login from '../src/component/login';
import Logout from '../src/component/logout';
import Register from '../src/component/register';
import Top from './component/topSales';
import Total from './component/totalSales';
import Nav from './component/nav';


function App() {
  return (
    <div>
      <Router>
      <Nav/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/add' element={<Add/>}/>
                <Route path='/top' element= {<Top/>}/>
                <Route path= '/total' element = {<Total/>}/>
                <Route path='/login' element = {<Login/>}/>
                <Route path='/register' element = {<Register/>}/>
                <Route path='/logout' element = {<Logout/>}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
