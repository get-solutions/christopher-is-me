import {Navigation, Footer} from "../components";
import styles from "../styles/Home.module.css";
import {PropsWithChildren} from "react";
import {FC} from 'react';

const MainTemplate: FC<PropsWithChildren> = ({children}) => {
    return (
        <div>
            <Navigation />
            <main className={styles.main}>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default MainTemplate;
