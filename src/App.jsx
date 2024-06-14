import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { LayoutAdmin, Layoutindex } from "./layout";
import {
  HomePage,
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
  UserRoom,
  AdminPage,
  AdminChat,
  WaitingListChatAdmin,
} from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        {/* Main page Start */}
        <Route element={<Layoutindex />}>
          <Route exact path="/" element={<HomePage />} />
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
        <Route element={<LayoutAdmin />}>
          <Route exact path="/admin" element={<AdminPage />} />
          <Route path="/admin/chat" element={<AdminChat />} />
          <Route path="/admin/waiting-list" element={<WaitingListChatAdmin />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
