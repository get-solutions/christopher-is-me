import dynamic from "next/dynamic";
import styles from '../styles/Home.module.css';

const ThemeToggle = dynamic(
    () => import("../components/ThemeToggle"),
    {ssr: false}
);

const Home = () => {
  return (
      <div className={styles.container}>
        <main className={styles.main}>
            <h1>Next.js dark mode toggle</h1>
            <h4>Dark mode is more than just a gimmick, right?!</h4>
            <ThemeToggle />
        </main>
      </div>
  );
}

export default Home;
