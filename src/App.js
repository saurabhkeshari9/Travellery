import "./App.css";
import { BrowserRouter as Router,Route,Routes} from "react-router-dom";  
 import { Navbar,Footer } from "./Components";
 import { Home,About,Gallery,Contact } from "./Pages";
const App = () =>{
 return (
    <>
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/gallery" element={<Gallery/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
            </Routes>
            <Footer />
        </Router>
    </>
 );
};
export {App};