import React from "react";
import "../style/main.css";
import "nes.css/css/nes.min.css";
import BoyRunning from "./characters/Boy/BoyRunning";
import { motion } from "framer-motion";

const loaderVariants = {
  animationOne: {
    x: [-200, 200],
    y: [0, -30],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 4,
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
};

const Loading = () => {
  return (
    <>
      <div class="margin">
        <motion.div
          className="loader"
          variants={loaderVariants}
          animate="animationOne"
        >
          <BoyRunning />
        </motion.div>
        loading ...
      </div>
    </>
  );
};

export default Loading;

{
  /* <div class="main-container">
      <div class="nes-container is-centered with-title">
        <h3 class="title"> Loading ... </h3>

        <BoyRunning />
      </div>
    </div> */
}
