import logo from './logo.svg';
import './App.css';
import AddStudent from './components/AddStudent';
import SearchStudent from './components/SearchStudent';
import Delete from './components/Delete';
import Studentviewall from './components/Studentviewall';
import Naevebar from './components/Naevebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
<Route path='/' element={<AddStudent/>}/>
<Route path='/SearchStudent' element={<SearchStudent/>}/>
<Route path='/Delete' element={<Delete/>}/>
<Route path='/Studentviewall' element={<Studentviewall/>}/>

    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
