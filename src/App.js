import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Details from "./routes/Details";
import EmojiRain from "./components/EmojiRain";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <EmojiRain />
            </>
          }
        />

        {/* Redirect /login and /register to Home */}
        <Route
          path="/login"
          element={
            <>
              <Login />
              <EmojiRain />
            </>
          }
        />
        <Route
          path="/register"
          element={
            <>
              <Register />
              <EmojiRain />
            </>
          }
        />

        <Route
          path="/details"
          element={
            <>
              <Details />
              <EmojiRain />
            </>
          }
        />

        {/* Handle unknown routes */}
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
