import React from "react";
import styles from "./Card.module.css";
import img from "../assets/Lenovo.png";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img src={img} alt="Computador" className={styles.profileImage} />
        <h2 className={styles.title}>Computador Portátil</h2>
        <p className={styles.description}>
          Portátil Lenovo Intel core i3 iDeapad3
        </p>
        <button className={styles.button}>Comprar ahora</button>
      </div>
    </div>
  );
};

export default Card;
