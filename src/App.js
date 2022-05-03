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

import { Routes, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<LandingPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/items" element={<Items />} />
      <Route path="/storeitem" element={<StoreItem />} />
      <Route path="/exchange" element={<Exchange />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/sendmessage" element={<SendMessage />} />
      <Route path="/bid" element={<Bid />} />
      <Route path="/offers" element={<Offers />} />
      <Route path="/offerreceived" element={<OfferReceived />} />
      <Route path="/offersent" element={<OfferSent />} />
    </Routes>
  );
}

export default App;
