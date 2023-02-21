import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './Home';

function App() {
  const navigate = useNavigate();

  return (
+
    <div className="App">
      <Home/>
      {/* <Routes>
        
      </Routes> */}
      
    </div>
  );
}

export default App;
