import React from "react";
import styles from "./index.module.scss";

const Header = () => {
    return (
        <header className={styles.header}>
            <img src="../../../public/icon48.png" alt="Logo da Randify" />
            <h1>Randify</h1>
        </header>
    )
}

export { Header }
