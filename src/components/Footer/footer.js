import React from "react";
import styles from "./footer.css";
import { Link } from "react-router-dom";
import logo from "./nbalogo.png";

import { CURRENT_YEAR } from "../config.js";

const footer = () => (
  <div className={styles.footer}>
    <Link to="/" className={styles.logo}>
      <img src={logo} alt="nba_logo" />
    </Link>
    <div className={styles.right}>@NBA {CURRENT_YEAR} All rights reserved.</div>
  </div>
);

export default footer;
