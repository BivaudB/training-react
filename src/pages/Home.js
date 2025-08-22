import React from 'react';
import Navigation from "./Navigation";
import styles from './Home.module.scss'

const Home = () => {
    return (
        <div className={styles.Home}>
            <Navigation />
            <h1>ACCUEIL</h1>
        </div>
    );
};

export default Home;