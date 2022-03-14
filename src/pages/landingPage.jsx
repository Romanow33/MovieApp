import { MoviesGrid } from "../components/moviesGrid";
import { Search } from "../components/search";
import { useDebounce } from "../hooks/useDebounce";
import { useSearchParams } from "react-router-dom";

export function LandingPage() {
  const [query] = useSearchParams();
  const search = query.get("search");

  const debouncedSearch = useDebounce(search, 300);

  return (
    <div>
      <Search />
      <MoviesGrid key={debouncedSearch} search={debouncedSearch} />
    </div>
  );
}
