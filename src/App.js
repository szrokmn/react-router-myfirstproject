import './App.css';
import Nav from "./components/Nav"
import Home from "./pages/Home"
import People from "./pages/People"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"
import Footer from "./components/Footer"
import Paths from "./pages/Paths"
import PersonDetail from "./pages/PersonDetail"
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/people" element={<People/>} />
        <Route path="/people/:id" element={<PersonDetail/>} />
        <Route path="/paths" element={<Paths/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<NotFound/>} />          
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
export default App;
