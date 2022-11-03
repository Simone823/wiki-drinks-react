import './App.css';

// import react router 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import pags home
import Home from './pages/Home';

// import useAppGlobalContext custom hook
import { useAppGlobalContext } from './context';

function App() {
  // app global context
  const appContext = useAppGlobalContext();

  return (
    <Router className="App">

      {/* routes */}
      <Routes>
        <Route path='/' element={<Home/>}></Route>  
      </Routes>

    </Router>
  );
}

export default App;
