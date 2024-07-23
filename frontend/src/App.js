import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddStudent from './components/AddStudent';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/add" element={<AddStudent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
