import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Notice from "./pages/Notice";
import Mypage from "./pages/Mypage";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="main-display">
        <Navbar />
        <Routes>
          <Route path="/" element={<Mypage />} />
          <Route path="/notice" element={<Notice />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
