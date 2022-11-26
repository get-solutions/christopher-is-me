import styles from './ThemeToggle.module.css';
import {useEffect, useState} from "react";

const ThemeToggle = () => {
    const [theme, setTheme] = useState("light");
    const inactiveTheme = theme === "light" ? "dark" : "light";

    useEffect(() => {
        document.body.dataset.theme = theme;
        window.localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <button
            aria-label={`Change to ${inactiveTheme} Mode`}
            title={`Change to ${inactiveTheme} Mode`}
            type="button"
            className={styles.toggle_button}
            onClick={() => setTheme(inactiveTheme)}
        >
            <span className={styles.toggle_thumb} />
            <span aria-hidden={true}>☪</span>
            <span aria-hidden={true}>☀️</span>
        </button>
    );
};

export default ThemeToggle;
