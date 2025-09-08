import Link from "next/link";
import styles from "./Navbar.module.css";

// Меню навигации
export default async function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href={"/"}>Главная</Link>
      <Link href={"/films"}>Фильмы</Link>
      <Link href={"/characters"}>Персонажи</Link>
    </nav>
  );
}
