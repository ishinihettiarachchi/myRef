import {BrowserRouter as Router ,Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import New from './pages/New';
import All from './pages/All';


function App() {
  return (
    <div className="App">
     <Router>
          <Routes>
           
            <Route path="/" element={<Home/>} />
            <Route path="/new" element={<New/>} />
            <Route path="/all" element={<All/>} />

          </Routes>
        </Router>
    </div>
  );
}

export default App;
