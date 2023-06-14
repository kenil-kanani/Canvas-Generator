import 'tailwindcss/tailwind.css';
import Navbar from './component/NavBar'
import AEIOU from './pages/AEIOU';
import Home from "./pages/Home";
import Empathy from './pages/Empathy';
import Report from './pages/Report';

import AEIOUPDF from './pages/AEIOUPDF';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';



function App() {
  return (
    <Router>
      <div >
        <Navbar></Navbar>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/AEIOU' element={<AEIOU />}></Route>
          <Route exact path='/Empathy' element={<Empathy />}></Route>
          <Route exact path='/Report' element={<Report />}></Route>
          <Route exact path='/AEIOUPDF' element={<AEIOUPDF/>}></Route>
        </Routes>
      </div>
    </Router >

  );
}

export default App;
