import './App.css';

// import react router 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import useAppGlobalContext custom hook
import { useAppGlobalContext } from './context';

// import Header
import Header from './components/Header';

// import pags home
import Home from './pages/Home';

// import footer
import Footer from './components/Footer';

function App() {
  // app global context
  const appContext = useAppGlobalContext();

  return (
    <Router className="App">
      {/* header */}
      <Header/>

      {/* routes */}
      <Routes>
        <Route path='/' element={<Home/>}></Route>  
      </Routes>

      {/* footer */}
      <Footer/>
    </Router>
  );
}

export default App;
