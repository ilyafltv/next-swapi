import styles from "./FilmList.module.css";
import type { Film } from "@/types/types";
import FilmsCard from "../FilmsCard/FilmsCard";

export default async function FilmsList() {
  const response = await fetch("https://swapi.info/api/films");
  const films = await response.json();

  return (
    <ul className={`${styles.films__list}`}>
      {films.map((film: Film, index: number) => (
        <FilmsCard
          key={film.episode_id}
          {...film}
          filmId={index + 1} // Добавляем индекс
        />
      ))}
    </ul>
  );
}
