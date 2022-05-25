import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import Contact from './Component/Contact';
import Home from './Component/Home';
import Nav from './Component/Nav';
import Student from './Component/Student';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/home' element = {<Home />} />
          <Route path='/student' element = {<Student />} />
          <Route path='/contact' element = {<Contact />} />

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
