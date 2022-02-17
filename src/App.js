// import logo from './logo.svg';
import './App.css';
// import Btn from '../src/components/btn/Btn';
import Header from './components/header/Header';
import Home from '../src/pages/home/Home';
import Cards from '../src/pages/cards/Cards';
import About from './pages/about/About';
import Footer from './components/footer/Footer';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';



function App() {
  return (
    <div className="App">

    <Router >
<Header />
{/* <Home /> */}
{/* <Cards /> */}
   <Routes>

<Route path='/header' element={<Header />}/>
<Route path='/' element={<Home />}/>
<Route path='/cards' element={<Cards />}/>
<Route path='/about' element={<About />} />
</Routes>

</Router>
   
</div>
  );
}

export default App;
