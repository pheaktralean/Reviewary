/* this is the main entry point of the React application */
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Create from "./pages/Create";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <Router>
      <div className="app-layout">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-review" element={<Create />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
