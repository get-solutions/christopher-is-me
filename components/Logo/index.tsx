import styles from "../Navigation/Navigation.module.css";
import Link from "next/link";

const Logo = () => {
    return (
        <Link href={"/"}>
            <img
                src={"./logo.png"}
                alt={"Christopher Miller Logo"}
                className={styles.logo}
            />
        </Link>
    )
}

export default Logo;
