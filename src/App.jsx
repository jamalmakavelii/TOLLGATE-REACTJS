import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Tollgate from './components/Tollgate';
import Login from './components/Login';
function App() {
  return (
   <BrowserRouter>
   <Navbar />
   <Routes>
     <Route path="/" element={<Home />}></Route>
     <Route path="/tollgate" element={<Tollgate />}></Route>
     <Route path="/login" element={<Login />}></Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
