import styles from "./page.module.css";
import Button from "@/components/UI/Button/Button";

export default function Home() {
  return (
    <section className={`${styles.home}`}>
      <div className={`${styles.home__content}`}>
        <h1 className={`title ${styles.home__title}`}>
          Исследуйте вселенную STARWARS!
        </h1>
        <p className={`${styles.home__description}`}>
          Читайте о фильмах и персонажах используя Next-Swapi
        </p>
        <div className={`${styles.home__buttons}`}>
          <Button variant="primary">Исследовать фильмы</Button>
          <Button variant="secondary">Смотреть Персонажей</Button>
        </div>
      </div>
    </section>
  );
}
