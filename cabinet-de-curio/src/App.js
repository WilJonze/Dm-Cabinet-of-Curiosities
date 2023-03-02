import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './pages';
import About from './pages/about';
import Contact from './pages/contact';
import Feedback from './pages/feedback';
import ManyAccordions from './Accordion';

function App() {
        return (
        <>
        <BrowserRouter>
                <Navbar />
                <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/feedback" element={<Feedback />} />
                </Routes>
        </BrowserRouter>
           <ManyAccordions />
        </>
        )
}

export default App;
