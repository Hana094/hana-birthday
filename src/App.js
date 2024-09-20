import "./css/main.css";
import RetroBackground from "./components/reto-background";
import Home from "./pages/home";
import Whishlist from "./pages/whishlist";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <RetroBackground />
      <Router>
        <nav className="nav">
          <ul>
            <li>
              <Link className="metallic-link  subtitle" to="/hana-birthday">
                Home
              </Link>
            </li>
            <li>
              <Link className="metallic-link  subtitle" to="/wishlist">
                Wishlist
              </Link>
            </li>
            <li>
              <Link className="metallic-link  subtitle" to="/virtual">
                Virtual
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/hana-birthday" element={<Home />} />
          <Route path="/whishlist" element={<Whishlist />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
