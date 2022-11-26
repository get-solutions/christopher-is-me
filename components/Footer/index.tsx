import styles from './Footer.module.css';
import {Logo} from "../index";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__addr}>
                <Logo />
            </div>
            <ul className={styles.footer__nav}>
                <li className={styles.nav__item}>
                    <h2 className={styles.nav__title}>Social Media</h2>
                    <ul className={styles.nav__ul}>
                        <li>
                            <Link
                                target="_blank"
                                href="https://twitter.com/ccmiller2018"
                            >
                                Twitter
                            </Link>
                        </li>
                        <li>
                            <Link
                                target="_blank"
                                href="https://linkedin.com/in/ccmiller2018"
                            >
                                Linkedin
                            </Link>
                        </li>
                        <li>
                            <Link
                                target="_blank"
                                href="https://twitch.com/ccmiller2018"
                            >
                                Twitch
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className={`${styles.nav__item} ${styles.nav__item__extra}`}>
                    <h2 className={styles.nav__title}>Blog Categories</h2>
                    <ul className={`${styles.nav__ul} ${styles.nav__ul__extra}`}>
                        <li>
                            <a href="#">Hardware Design</a>
                        </li>
                        <li>
                            <a href="#">Software Design</a>
                        </li>
                        <li>
                            <a href="#">Digital Signage</a>
                        </li>
                        <li>
                            <a href="#">Automation</a>
                        </li>
                        <li>
                            <a href="#">Artificial Intelligence</a>
                        </li>
                        <li>
                            <a href="#">IoT</a>
                        </li>
                    </ul>
                </li>
                <li className={styles.nav__item}>
                    <h2 className={styles.nav__title}>Legal</h2>
                    <ul className={styles.nav__ul}>
                        <li>
                            <Link href="/privacy-policy">
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link href="/terms-of-use">
                                Terms Of Use
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>
            <div className={styles.legal}>
                <p>&copy; 2019 Christopher Miller. All rights reserved.</p>
                <div className={styles.legal__links}>
                    <span>Made with <span className={styles.heart}>♥</span> by Christopher Miller</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
