import React, { useState, useEffect } from "react";
import "../style/main.css";
import "nes.css/css/nes.min.css";
import { useNavigate, Navigate } from "react-router-dom";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import { useAuth } from "../context/AuthContext";
import Loading from "./Loading";
import axios from "axios";



const StoreItem = () => {

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(false);

  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);


  const { loading, createPost, } = useAuth();

  const [isListed, setIsListed] = useState(false);
  const [{ title, category, body }, setFormState] = useState({
    title: '',
    body: '',
    category: '',

  });

  const handleFileChange = e => {
    if (e.target.files[0])
      setFile(e.target.files[0]);
    const reader = new FileReader()
    reader.onload = (e) => setImage(e.target.result)
    reader.readAsDataURL(e.target.files[0])
  }


  const handleListedChange = () => setIsListed(!isListed);

  const handleInputChange = e => setFormState(prev => ({ ...prev, [e.target.id]: e.target.value }));

  const handleSubmit = async e => {
    try {
      e.preventDefault();
      if (!title || !file || !body || !category)
        return (
          setError(true),
          setErrorMessage("NOTHING CAN BE LEFT EMPTY !")
        );
      const formData = new FormData()
      formData.append("title", title)
      formData.append("body", body)
      formData.append("category", category)
      formData.append("image", file)
      const { data: newItem } = await axios.post(`${process.env.REACT_APP_BARTERGROUND_API_URL}/posts`, formData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token')
        }
      });
      setFormState({
        title: '',
        body: '',
        category: '',
      });
      navigate(`/auth/items`);

      setIsListed(false);
      setImage(null);
    } catch (error) {
      return (
        setError(true),
        setErrorMessage("SOMETHING IS WRONG !"))
    }
  };

  if (loading) return <Loading />;

  return (
    <div className="main-container">
      <div className="nes-container is-centered with-title" id="landing">
        <h3 className="title"> Store Item </h3>
        <div className="main-container">



          <div className="nes-container is-rounded" >
            <div className="storeitem-img">
              <img
                className="item-img"
                src={image ? image : require("../images/logo.webp")}
                alt="Item Image"
              />
              <br />

              <label className="nes-btn">
                <span>Upload your Image</span>
                <input type="file" onChange={handleFileChange} />
              </label>


            </div>
          </div>
          <br />
          <label>
            <input type="checkbox" className="nes-checkbox" value={isListed} onChange={handleListedChange} />
            <span>Is Listed</span>
          </label>
          <br />
          <div class="nes-field">
            <label for="title">Title</label>
            <input type="text" id="title" class="nes-input" value={title} onChange={handleInputChange} />
          </div>
          <br />

          {error && <ErrorMessage>{errorMessage}</ErrorMessage>}
          <label for="body">Description</label>
          <textarea
            id="body"
            className="nes-textarea"
            spellcheck="false"
            value={body} onChange={handleInputChange}
          ></textarea>
          <br />

          <div className="internal-container">
            <div className="nes-select">
              <select id="category" value={category} onChange={handleInputChange}>
                <option value="" disabled="" selected="" hidden="yes">
                  Select Category
                </option>
                <option value={"Automotive & Powersports"}>Automotive & Powersports</option>
                <option value={"Baby Products"}>Baby Products</option>
                <option value={"Beauty"}>Beauty</option>
                <option value={"Books"}>Books</option>
                <option value={"Camera & Photo"}>Camera & Photo</option>
                <option value={"Cell Phones & Accessories"}>Cell Phones & Accessories</option>
                <option value={"Collectible"}>Collectible</option>
                <option value={"Consumer Electronics"}>Consumer Electronics</option>
                <option value={"Fine Art"}>Fine Art</option>
                <option value={"Grocery & Gourmet Foods"}>Grocery & Gourmet Foods</option>
                <option value={"Health & Personal Care"}>Health & Personal Care</option>
                <option value={"Home & Garden"}>Home & Garden</option>
                <option value={"Independent Design"}>Independent Design</option>
                <option value={"Industrial & Scientific"}>Industrial & Scientific</option>
                <option value={"Major Appliances"}>Major Appliances</option>
                <option value={"Miscellaneous"}>Miscellaneous</option>
                <option value={"Music and DVD"}>Music & DVD</option>
                <option value={"Musical Instruments"}>Musical Instruments</option>
                <option value={"Office Products"}>Office Products</option>
                <option value={"Outdoors"}>Outdoors</option>
                <option value={"Personal Computers"}>Personal Computers</option>
                <option value={"Pet Supplies"}>Pet Supplies</option>
                <option value={"Software"}>Software</option>
                <option value={"Sports"}>Sports</option>
                <option value={"Tools & Home Improvement"}>Tools & Home Improvement</option>
                <option value={"Video, DVD & Blu-ray"}>Video, DVD & Blu-ray</option>
                <option value={"Video Games"}>Video Games</option>
                <option value={"Watches"}>Watches</option>
              </select>
            </div>
            <br />

            <button
              type="button"
              className="nes-btn is-success"
              onClick={handleSubmit}
            >
              OK
            </button>
          </div>
        </div>
      </div>
      <div className="nes-container is-centered" id="landing">
        <div className="buttons-container">
          <button
            type="button"
            className="nes-btn is-primary"
            onClick={() => navigate("/auth/exchange")}
          >
            Exchange center
          </button>
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
            onClick={() => navigate("/auth/items")}
          >
            Your Treasure
          </button>
        </div>
      </div>
    </div>
  );
};


export default StoreItem;
