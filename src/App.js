import './App.css';

// import react router 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Header
import Header from './components/Header';

// import pags home
import Home from './pages/Home';

// import about pages
import About from './pages/About';

// import contact pages
import Contact from './pages/Contact';

// import single cocktail page
import SingleCocktail from './pages/SingleCocktail';

// import not found pages
import NotFound from './pages/NotFound';

// import footer
import Footer from './components/Footer';

function App() {
  return (
    <Router className="App">
      {/* header */}
      <Header/>

      <main>
        {/* routes */}
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>  
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/cocktail/:id' element={<SingleCocktail/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
      </main>

      {/* footer */}
      <Footer/>
    </Router>
  );
}

export default App;
