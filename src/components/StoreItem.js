import React, { useState, useEffect } from "react";
import "../style/main.css";
import "nes.css/css/nes.min.css";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import { useAuth } from "../context/AuthContext";
import Loading from "./Loading";
import axios from "axios";

const StoreItem = () => {
  const navigate = useNavigate();
  const search = useLocation().search;
  const id = new URLSearchParams(search).get("id");
  const [isSubmitBtn, setIsSubmitBtn] = useState(true);
  /*   if (id != undefined) { */
  //make a call to the single Item API endpoint

  /*   } */

  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(false);

  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);

  const { loading } = useAuth();

  const [isListed, setIsListed] = useState(false);
  const [{ title, category, body }, setFormState] = useState({
    title: "",
    body: "",
    category: "",
  });

  const handleFileChange = (e) => {
    if (e.target.files[0]) setFile(e.target.files[0]);
    const reader = new FileReader();
    reader.onload = (e) => setImage(e.target.result);
    reader.readAsDataURL(e.target.files[0]);
  };

  const handleListedChange = () => setIsListed(!isListed);

  const handleInputChange = (e) =>
    setFormState((prev) => ({ ...prev, [e.target.id]: e.target.value }));

  useEffect(() => {
    if (id) {
      axios
        .get(`${process.env.REACT_APP_BARTERGROUND_API_URL}/posts/${id}`)
        .then((response) => {
          var result = response.data;
          setFormState({
            title: result.title,
            body: result.body,
            category: result.category,
          });
          setIsListed(result.isListed);
          setImage(result.image);
          setIsSubmitBtn(false);
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);
  async function getFileFromUrl(url, name, defaultType = "image/jpeg") {
    // let response = await fetch(url, { mode: "no-cors" });
    // let data = await response.blob();
    // let metadata = {
    //   contentType: "image/jpeg",
    // };
    // return new File([data], name, metadata);
    return fetch(url)
      .then((response) => response.blob())
      .then((myBlob) => {
        const urlCreator = window.URL || window.webkitURL;
        const imageUrl = urlCreator.createObjectURL(myBlob);
        return new File([imageUrl], name, { type: "image/jpeg" });
      });
  }
  const handleUpdate = async (e) => {
    try {
      e.preventDefault();
      let fileObj = null;
      /*
      if (!title || !file || !body || !category)
        return setError(true), setErrorMessage("NOTHING CAN BE LEFT EMPTY !"); */
      if (!file) {
        fileObj = await getFileFromUrl(image, image.split("/").pop());
      }
      console.log(fileObj);
      console.log("file", file);
      const formData = new FormData();
      formData.append("title", title);
      formData.append("body", body);
      formData.append("category", category);
      file && formData.append("image", file);
      formData.append("isListed", isListed);
      await axios.put(
        `${process.env.REACT_APP_BARTERGROUND_API_URL}/posts/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      setFormState({
        title: "",
        body: "",
        category: "",
      });

      setIsListed(false);
      setImage(null);
      navigate(`/auth/items`);
    } catch (error) {
      console.log(error);
      /* return setError(true), setErrorMessage("SOMETHING IS WRONG !"); */
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!title || !file || !body || !category)
        return setError(true), setErrorMessage("NOTHING CAN BE LEFT EMPTY !");
      const formData = new FormData();
      formData.append("title", title);
      formData.append("body", body);
      formData.append("category", category);
      formData.append("image", file);
      formData.append("isListed", isListed);
      await axios.post(
        `${process.env.REACT_APP_BARTERGROUND_API_URL}/posts`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      setFormState({
        title: "",
        body: "",
        category: "",
      });

      setIsListed(false);
      setImage(null);
      navigate(`/auth/items`);
    } catch (error) {
      return setError(true), setErrorMessage("SOMETHING IS WRONG !");
    }
  };

  if (loading) return <Loading />;

  return (
    <div className="main-container">
      <div className="nes-container is-centered with-title" id="landing">
        <h3 className="title"> Store Item </h3>
        <div className="main-container">
          <div className="nes-container is-rounded">
            <div className="storeitem-img">
              <img
                className="item-img"
                src={image ? image : require("../images/logo.webp")}
                alt="Item"
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
            <input
              type="checkbox"
              className="nes-checkbox"
              id="isListed"
              value={isListed}
              onChange={handleListedChange}
              checked={isListed}
            />
            <span>Is Listed</span>
          </label>
          <br />
          <div className="nes-field">
            <label for="title">Title</label>
            <input
              type="text"
              id="title"
              className="nes-input"
              value={title}
              onChange={handleInputChange}
            />
          </div>
          <br />

          {error && <ErrorMessage>{errorMessage}</ErrorMessage>}
          <label for="body">Description</label>
          <textarea
            id="body"
            className="nes-textarea"
            spellCheck="false"
            value={body}
            onChange={handleInputChange}
          ></textarea>
          <br />

          <div className="internal-container">
            <div className="nes-select">
              <select
                id="category"
                value={category}
                onChange={handleInputChange}
              >
                <option value="" disabled="" hidden="yes">
                  Select Category
                </option>
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

                <option value={"Music, Vinyls & DVD"}>
                  Music, Vinyls & DVD
                </option>
                <option value={"Musical Instruments"}>
                  Musical Instruments
                </option>
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
            <br />

            {isSubmitBtn && (
              <button
                type="button"
                className="nes-btn is-success"
                onClick={(e) => handleSubmit(e)}
              >
                OK
              </button>
            )}
            {!isSubmitBtn && (
              <button
                type="button"
                className="nes-btn is-success"
                onClick={(e) => handleUpdate(e)}
              >
                Update
              </button>
            )}
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
