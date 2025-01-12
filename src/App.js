import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./유호은/LandingPage";
import { 유호은 } from "./유호은/유호은";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/김조순" element={<김조순 />} /> */}
        {/* <Route path="/박세정" element={<박세정 />} /> */}
        {/* <Route path="/봉재완" element={<봉재완 />} /> */}
        <Route path="/유호은" element={<유호은 />} />
        {/* <Route path="/윤민호" element={<윤민호 />} /> */}
        {/* <Route path="/최수빈" element={<최수빈 />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
