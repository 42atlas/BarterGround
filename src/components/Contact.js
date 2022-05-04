import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import "../style/main.css";
import "nes.css/css/nes.min.css";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "./ErrorMessage/ErrorMessage";




const Contact = () => {
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const [{ name, email, textarea }, setFormState] = useState({
        name: "",
        email: "",
        textarea: "",
    });

    const handleChange = (e) => {
        setFormState((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();
        if (!name || !email || !textarea) {
            setError(true);
            setErrorMessage("NO NO NO FILL ME UP!");
            return;
        } else {
            setError(false);
            emailjs.sendForm('service_raffaelli.studio', 'template_BarterGround', form.current, 'nUZAa-lKMmk36Iq73')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                }, navigate("/"));

        }
    };
    return (
        <div className="main-container">
            <div className="nes-container is-centered with-title" id="landing">
                <h3 className="title"> Contact </h3>
                <br />
                <div className="section-header" >
                    <h2>Fill in the form. <br />  It's easy.</h2>
                </div>
                <br />
                {error && <ErrorMessage>{errorMessage}</ErrorMessage>}
                <form className="form-register" ref={form}>
                    <br />
                    <div className="nes-field">
                        <label for="name_field">NickName</label>
                        <input type="text" id="name" className="nes-input" placeholder="Seppia" name="user_name" value={name}
                            onChange={handleChange} />
                    </div>
                    <br />
                    <div className="nes-field">
                        <label for="email_field">An e-mail so we can write you back</label>
                        <input type="email" id="email" className="nes-input" placeholder="ifno@nasa.gov" name="user_email" value={email}
                            onChange={handleChange} />
                    </div>
                    <br />
                    <div className="nes-field">
                        <label for="textarea_field">Your Story</label>
                        <textarea id="textarea" className="nes-textarea" placeholder="Once upon a time..." name="message" value={textarea} onChange={handleChange} />
                    </div>
                    <br />
                    <button type="submit" className="nes-btn is-success" style={{ width: "99%" }} value="send" onClick={sendEmail}>Send message</button>

                </form>
            </div>
        </div >

    );

};
export default Contact;
