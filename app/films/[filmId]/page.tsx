import { notFound } from "next/navigation";
import Button from "@/components/UI/Button/Button";
import styles from "./page.module.css";
import Image from "next/image";

async function fetchFilm(id: string) {
  const response = await fetch("https://swapi.info/api/films/" + id);
  if (!response.ok) {
    return null;
  }

  const film = await response.json();
  return film;
}

export default async function FilmPage({
  params,
}: {
  params: Promise<{ filmId: string }>;
}) {
  const { filmId } = await params;
  const film = await fetchFilm(filmId);

  if (!film) {
    notFound();
  }

  // Форматируем дату для лучшего отображения
  const releaseDate = new Date(film.release_date).toLocaleDateString("ru-RU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div className="container">
      <div className={styles.filmPage}>
        <div className={styles.filmPage__header}>
          <h1 className={styles.filmPage__title}>{film.title}</h1>
          <span className={styles.filmPage__episode}>
            Эпизод {film.episode_id}
          </span>
        </div>

        <div className={styles.filmPage__content}>
          <div className={styles.filmPage__poster}>
            <Image
              src={`/films/${filmId}.jpg`}
              alt={`Постер фильма "${film.title}"`}
              className={styles.filmPage__image}
              width={280}
              height={400}
            />
          </div>

          <div className={styles.filmPage__details}>
            <div className={styles.filmPage__detail}>
              <span className={styles.filmPage__label}>Режиссер:</span>
              <span className={styles.filmPage__value}>{film.director}</span>
            </div>

            <div className={styles.filmPage__detail}>
              <span className={styles.filmPage__label}>Продюсер:</span>
              <span className={styles.filmPage__value}>{film.producer}</span>
            </div>

            <div className={styles.filmPage__detail}>
              <span className={styles.filmPage__label}>Дата выхода:</span>
              <span className={styles.filmPage__value}>{releaseDate}</span>
            </div>

            <div className={styles.filmPage__detail}>
              <span className={styles.filmPage__label}>
                Количество персонажей:
              </span>
              <span className={styles.filmPage__value}>
                {film.characters.length}
              </span>
            </div>

            <div className={styles.filmPage__detail}>
              <span className={styles.filmPage__label}>Количество планет:</span>
              <span className={styles.filmPage__value}>
                {film.planets.length}
              </span>
            </div>

            <div className={styles.filmPage__detail}>
              <span className={styles.filmPage__label}>
                Количество транспортных средств:
              </span>
              <span className={styles.filmPage__value}>
                {film.vehicles.length}
              </span>
            </div>

            <div className={styles.filmPage__detail}>
              <span className={styles.filmPage__label}>
                Количество кораблей:
              </span>
              <span className={styles.filmPage__value}>
                {film.starships.length}
              </span>
            </div>

            <div className={styles.filmPage__detail}>
              <span className={styles.filmPage__label}>Количество видов:</span>
              <span className={styles.filmPage__value}>
                {film.species.length}
              </span>
            </div>

            <div className={styles.filmPage__intro}>
              <h3 className={styles.filmPage__subtitle}>
                Вступительный текст:
              </h3>
              <p className={styles.filmPage__openingCrawl}>
                {film.opening_crawl}
              </p>
            </div>
          </div>
        </div>

        <div className={styles.filmPage__actions}>
          <Button variant="secondary" href="/films">
            Назад к списку фильмов
          </Button>
        </div>
      </div>
    </div>
  );
}
