import "./App.css";
import LandingPage from "./components/LandingPage.js";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Items from "./components/Items";
import Exchange from "./components/Exchange";
import Messages from "./components/Messages";
import SendMessage from "./components/SendMessage";
import Bid from "./components/Bid";
import Offers from "./components/Offers";
import OfferReceived from "./components/OfferReceived";
import OfferSent from "./components/OfferSent";
import StoreItem from "./components/StoreItem";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Settings from "./components/Settings";
import AuthState from "./context/AuthContext";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <AuthState>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="contact" element={<Contact />} />
          <Route path="auth" element={<ProtectedRoute />}>
            <Route path="home" element={<Home />} />
            <Route path="items" element={<Items />} />
            <Route path="storeitem" element={<StoreItem />} />
            <Route exact path="exchange" element={<Exchange />} />
            <Route path="messages" element={<Messages />} />
            <Route path="sendmessage" element={<SendMessage />} />
            <Route path="bid" element={<Bid />} />
            <Route path="offers" element={<Offers />} />
            <Route path="offerreceived" element={<OfferReceived />} />
            <Route path="offersent" element={<OfferSent />} />
            <Route path="settings/:id" element={<Settings />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AuthState>
  );
}

export default App;
