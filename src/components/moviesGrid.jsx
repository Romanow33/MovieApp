import { MovieCard } from "./movieCard";
import styles from "./moviesGrid.module.css";
import { Spiner } from "./spiner";
import InfiniteScroll from "react-infinite-scroll-component";

import { Empty } from "./Empty";
import { useMovies } from "../hooks/useMovies";
import { animateScroll as scroll } from "react-scroll";
export function MoviesGrid({ search }) {
  const { movies, isLoading, hasNextPage, fetchNextPage } = useMovies(search);
  if (!isLoading && movies.length === 0) {
    return <Empty />;
  }

  const onClickDown = () => {
    scroll.scrollMore(650);
  };
  const onClickUp = () => {
    scroll.scrollMore(-650);
  };
  const onClickHome = () => {
    scroll.scrollToTop();
  };

  return (
    <InfiniteScroll
      className={styles.scroll}
      dataLength={movies.length}
      hasMore={hasNextPage | isLoading}
      next={() => fetchNextPage()}
      loader={<Spiner />}
    >
      <button className={styles.buttonScrollUp} onClick={onClickUp}>
        up
      </button>
      <button className={styles.buttonScrolldown} onClick={onClickDown}>
        down
      </button>
      <button className={styles.toHome} onClick={onClickHome}>
        HOME
      </button>
      <ul className={styles.moviesGrid}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </InfiniteScroll>
  );
}
