import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Terminal from "./components/Terminal";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
      <Terminal>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
      </Terminal>
    </Router>
  );
}

export default App;
