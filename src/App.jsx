import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Signup from './Pages/Auth/Signup';
import Login from './Pages/Auth/Login';

function App() {
  return (
    <Router>
      <div className='App font-mona-sans'> 
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Signup' element={<Signup/>}/>
          <Route path='/Login' element={<Login/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
