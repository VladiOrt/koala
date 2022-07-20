import logo from './logo.svg';
import './App.css';


import Home from './components/home';

import {BrowserRouter, Route,Link,Routes} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter >      
      <Routes>
          <Route  path='/' element={<Home  />} />       
           <Route  path='*' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
