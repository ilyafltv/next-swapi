import Button from "@/components/UI/Button/Button";
import type { Film } from "@/types/types";
import styles from "./FilmsCard.module.css";
import Image from "next/image";

interface FilmCardProps extends Film {
  filmId: number;
}

export default function FilmCard({ filmId, ...film }: FilmCardProps) {
  return (
    <article className={styles.filmsCard}>
      <div className={styles.filmsCard__imageContainer}>
        <Image
          src={`/films/${filmId}.jpg`}
          alt={`Постер фильма "${film.title}"`}
          className={styles.filmsCard__image}
          width={280}
          height={400}
        />
        <span className={styles.filmsCard__episode}>
          Эпизод {film.episode_id}
        </span>
      </div>

      <div className={styles.filmsCard__content}>
        <h3 className={styles.filmsCard__title}>{film.title}</h3>

        <div className={styles.filmsCard__details}>
          <div className={styles.filmsCard__detail}>
            <span className={styles.filmsCard__label}>Режиссер:</span>
            <span className={styles.filmsCard__value}>{film.director}</span>
          </div>

          <div className={styles.filmsCard__detail}>
            <span className={styles.filmsCard__label}>Дата выхода:</span>
            <span className={styles.filmsCard__value}>{film.release_date}</span>
          </div>

          <div className={styles.filmsCard__detail}>
            <span className={styles.filmsCard__label}>Персонажей:</span>
            <span className={styles.filmsCard__value}>
              {film.characters.length}
            </span>
          </div>
        </div>

        <div className={styles.filmsCard__buttonWrapper}>
          <Button variant="primary" href={`/films/${filmId}`}>
            Подробнее
          </Button>
        </div>
      </div>
    </article>
  );
}
