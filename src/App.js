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
              <Link className="metallic-link  subtitle" to="/">
                Home
              </Link>
            </li>
            <li>
              <a
                className="metallic-link  subtitle"
                href="https://www.amazon.com.mx/registries/gl/guest-view/1SSO0XWA4NUO7"
                target="_blank"
                rel="noopener noreferrer"
              >
                Wishlist
              </a>
            </li>
            <li>
              <Link className="metallic-link  subtitle" to="/virtual">
                Virtual
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/whishlist" element={<Whishlist />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
