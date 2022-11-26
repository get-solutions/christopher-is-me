import styles from './Navigation.module.css';
import {Logo, NavigationItem} from "../index";
import {useEffect, useState} from "react";
import dynamic from "next/dynamic";

const ThemeToggle = dynamic(
    () => import("../../components/ThemeToggle"),
    {ssr: false}
);

const MENU_LIST = [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
    { label: "Speaking", url: "/speaking" },
    { label: "Articles", url: "/articles" },
    { label: "Contact", url: "/contact" },
];

const Navigation = () => {
    const [activeNav, setActiveNav] = useState(-1);

    useEffect(() => {
        let activeId = -1;

        MENU_LIST.map((item:{label: string, url: string}, id: number) => {
            if (window.location.pathname === item.url) {
                activeId = id;
            }
        });

        setActiveNav(activeId);
    }, []);
    return (
        <nav className={styles.navigation}>
            <Logo />
            {MENU_LIST.map((menu: {label: string, url: string}, id: number) => {
                return (
                    <NavigationItem
                        key={id}
                        url={menu.url}
                        label={menu.label}
                        active={activeNav === id}
                    />
                )
            })}
            <ThemeToggle />
        </nav>
    )
}

export default Navigation;
