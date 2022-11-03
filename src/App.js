import './App.css';

// import useAppGlobalContext custom hook
import { useAppGlobalContext } from './context';

function App() {
  // app global context
  const appContext = useAppGlobalContext();

  return (
    <div className="App">
    </div>
  );
}

export default App;
