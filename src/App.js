import './App.css';

// import react router 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import pags home
import Home from './pages/Home';

// import useAppGlobalContext custom hook
import { useAppGlobalContext } from './context';

// import footer
import Footer from './components/Footer';

function App() {
  // app global context
  const appContext = useAppGlobalContext();

  return (
    <Router className="App">

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
