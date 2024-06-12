import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Layoutindex } from "./layout";
import {
  HomePage,
  Dashboard,
  About,
  Contact,
  Novels,
  HelpCenter,
  HelpCenterBot,
  ErrorPage,
  SignInPage,
  SignUpPage,
  SuccessPage,
  Category,
} from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        {/* Main page Start */}
        <Route element={<Layoutindex />}>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          {/* Main novels Start */}
          <Route path="/novels" element={<Novels />} />
          <Route path="/category" element={<Category />} />
          {/* Main novels End */}
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/help-center/bot-nara" element={<HelpCenterBot />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/success" element={<SuccessPage />} />
        </Route>
        {/* Main page End */}

        {/* Auth page start */}
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        {/* Auth page End */}
      </Routes>
    </Router>
  );
}

export default App;
