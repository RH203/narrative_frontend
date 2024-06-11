import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Layoutindex } from "./layout";
import {
  Home,
  Dashboard,
  About,
  Contact,
  Novels,
  HelpCenter,
  HelpCenterBot,
} from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        {/* Main page Start */}
        <Route element={<Layoutindex />}>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/novels" element={<Novels />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/help-center/bot-nara" element={<HelpCenterBot />} />
        </Route>
        {/* Main page End */}
      </Routes>
    </Router>
  );
}

export default App;
