import { BrowserRouter as Router } from 'react-router-dom';
import CeoList from './components/CeoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Apple CEOs v5</h1>
      <Router>
        <CeoList />
      </Router>
    </div>
  );
}

export default App;
