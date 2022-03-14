import { MovieCard } from "./movieCard";
import styles from "./moviesGrid.module.css";
import { Spiner } from "./spiner";
import InfiniteScroll from "react-infinite-scroll-component";

import { Empty } from "./Empty";
import { useMovies } from "../hooks/useMovies";
export function MoviesGrid({ search }) {
  const { movies, isLoading, hasNextPage, fetchNextPage } = useMovies(search);
  if (!isLoading && movies.length === 0) {
    return <Empty />;
  }

  return (
    <InfiniteScroll
      className={styles.scroll}
      dataLength={movies.length}
      hasMore={hasNextPage | isLoading}
      next={() => fetchNextPage()}
      loader={<Spiner />}
    >
      <ul className={styles.moviesGrid}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </InfiniteScroll>
  );
}
