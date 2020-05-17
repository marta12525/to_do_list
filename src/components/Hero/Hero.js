import React from 'react';
import styles from './Hero.scss';

const Hero = () => (
    <header className={styles.component}>
        <h2 className={styles.title}>To-do list</h2>
        <img className={styles.image} src="https://images.pexels.com/photos/3774088/pexels-photo-3774088.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" />
    </header>
);

export default Hero;