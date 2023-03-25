import './App.css';
import { BrowserRouter as Router, Routes, Route, UNSAFE_DataRouterStateContext } from 'react-router-dom';
import Header from './Header';
import About from './About';
import Code from './Code';
import AutocompleteSearch from './AutocompleteSearch';
import StatBlock from './StatBlock';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <Routes>
            <Route path="/" element={<AutocompleteSearch />} exact />
            <Route path="/about" element={<About />} />
            <Route path="/code" element={<Code />} />
          </Routes>
      </Router>
      <StatBlock />
    
    </div>
  );
}

export default App;
