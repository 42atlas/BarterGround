import React, { useState, useEffect, useCallback, useMemo } from "react";
import "../style/main.css";
import "nes.css/css/nes.min.css";
import { useNavigate, Navigate, Link } from "react-router-dom";

import Loading from "./Loading";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import Items from "./Items";

const Exchange = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const { user, loading } = useAuth();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [{ category }, setFormState] = useState({
    category: "",
  });
  const getItems = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BARTERGROUND_API_URL}/posts/all-posts`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      setItems(data);
    } catch (error) {
      console.log(error.response?.data.error || error.message);
      setError(true);
      setErrorMessage("SOMETHING WENT WRONG !");
    }
  }, []);

  useEffect(() => {
    getItems();
  }, []);

  const handleInputChange = (e) =>
    setFormState((prev) => ({ ...prev, [e.target.id]: e.target.value }));

  function getFilteredList() {
    // Avoid filter when selectedCategory is null
    if (!category) {
      return items;
    }
    return items.filter((item) => item.category === category);
  }

  // Avoid duplicate function calls with useMemo
  var filteredList = useMemo(getFilteredList, [category, items]);

  if (loading) return <Loading />;
  return (
    <div className="main-container">
      <div className="nes-container is-centered with-title">
        <h3 className="title"> Exchange </h3>
        <div className="internal-container">
          <div className="nes-field">
            <input
              type="text"
              id="inline_field"
              className="nes-input"
              placeholder="Search an item..."
            />
          </div>
          <div className="nes-select">
            <select id="category" value={category} onChange={handleInputChange}>
              <option value="" disabled="" selected="" hidden="yes">
                Select Category
              </option>
              <option value={""}>All</option>
              <option value={"Appliances"}>Appliances</option>
              <option value={"Automotive"}>Automotive</option>
              <option value={"Baby Stuff"}>Baby Stuff</option>
              <option value={"Beauty"}>Beauty</option>
              <option value={"Books"}>Books</option>
              <option value={"Photo Stuff"}>Photo Stuff</option>
              <option value={"Clothes"}>Clothes</option>
              <option value={"Cell Phones & Accessories"}>
                Cell Phones & Accessories
              </option>
              <option value={"Collectible"}>Collectible</option>
              <option value={"Consumer Electronics"}>
                Consumer Electronics
              </option>
              <option value={"Fine Art"}>Fine Art</option>
              <option value={"Grocery & Gourmet Foods"}>
                Grocery & Gourmet Foods
              </option>
              <option value={"Health & Personal Care"}>
                Health & Personal Care
              </option>
              <option value={"Home & Garden"}>Home & Garden</option>
              <option value={"Independent Design"}>Independent Design</option>
              <option value={"Industrial & Scientific"}>
                Industrial & Scientific
              </option>

              <option value={"Music, Vinyls & DVD"}>Music, Vinyls & DVD</option>
              <option value={"Musical Instruments"}>Musical Instruments</option>
              <option value={"Office Stuff"}>Office Stuff</option>
              <option value={"Others"}>Others</option>
              <option value={"Outdoors"}>Outdoors</option>
              <option value={"Computers"}>Computers</option>
              <option value={"Pet Supplies"}>Pet Supplies</option>
              <option value={"Software"}>Software</option>
              <option value={"Sports"}>Sports</option>
              <option value={"Tools & Home Improvement"}>
                Tools & Home Improvement
              </option>
              <option value={"Toys & Games"}>Toys & Games</option>
              <option value={"Video, DVD & Blu-ray"}>
                Video, DVD & Blu-ray
              </option>
              <option value={"Video Games"}>Video Games</option>
            </select>
          </div>
          <div className="infinite-img-x">
            {filteredList.map((item) => (
              <div key={item._id} className="infinite-img-x">
                {/*offered ITEMS Gallery*/}
                <Link to={`/auth/bid?id=${item._id}`}>
                  <div
                    className="nes-container with-title"
                    id="item-img-container"
                  >
                    <h3 className="title" id="smallfont">
                      {item.title}
                    </h3>

                    <img className="item-img" src={item.image} alt="item img" />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="nes-container is-centered">
        <div className="buttons-container">
          <button
            type="button"
            className="nes-btn is-primary"
            onClick={() => navigate("/auth/home")}
          >
            Home
          </button>
          <button
            type="button"
            className="nes-btn is-primary"
            onClick={() => navigate("/auth/storeitem")}
          >
            List your Item
          </button>

          <button
            type="button"
            className="nes-btn is-primary"
            onClick={() => navigate("/auth/offers")}
          >
            Offers
          </button>
        </div>
      </div>
    </div>
  );
};

export default Exchange;
