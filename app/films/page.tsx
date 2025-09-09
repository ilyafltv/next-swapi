import FilmsList from "@/components/films/FilmsList/FilmsList";

export default async function Films() {
  return (
    <section className="container films">
      <h1>Фильмы</h1>

      <FilmsList />
    </section>
  );
}
