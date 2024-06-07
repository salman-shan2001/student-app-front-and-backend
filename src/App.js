import logo from './logo.svg';
import './App.css';
import AddStudent from './components/AddStudent';
import SearchStudent from './components/SearchStudent';
import Delete from './components/Delete';
import Studentviewall from './components/Studentviewall';
import Naevebar from './components/Naevebar';

function App() {
  return (
    <div>
       <AddStudent/>
       <SearchStudent/>
       <Delete/>
       <Studentviewall/>
       
    </div>
  );
}

export default App;
