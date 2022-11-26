import Link from "next/link";
import styles from './NavigationItem.module.css';

type NavItemProps = {
    url: string,
    label: string,
    active: boolean,
};

const NavigationItem = ({url, label, active}: NavItemProps) => {
    return (
        <Link
            className={styles.navItem}
            href={url}
        >
            <div className={active ? styles.active : styles.inactive}>
                {label}
            </div>
        </Link>
    )
}

export default NavigationItem;
