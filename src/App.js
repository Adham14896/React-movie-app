import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Movie from "./components/Movie";

const apiKey = " 467aff620d41210aaeb6698cb6da041d";

const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=467aff620d41210aaeb6698cb6da041d&query=`;

const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=467aff620d41210aaeb6698cb6da041d&page=1`;

const initialState = {
  movies: [],
  query: "",
  isLoading: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "movies/loading":
      return { ...state, isLoading: true };
    case "movies/loaded":
      return { ...state, movies: action.payload, isLoading: false };
    case "movies/search":
      return { ...state, query: action.payload };
    default:
      return state;
  }
}

function App() {
  const [{ movies, query, isLoading }, dispatch] = useReducer(
    reducer,
    initialState
  );

  async function fetchMovies() {
    dispatch({ type: "movies/loading" });
    const moviesRes = await fetch(FEATURED_API);
    const moviesData = await moviesRes.json();
    console.log(moviesData.results);
    dispatch({ type: "movies/loaded", payload: moviesData.results });
  }

  async function handleSearchInput(e) {
    if (!query) return;
    const searchRes = await fetch(`${SEARCH_API}${query}`);
    const searchData = await searchRes.json();
    dispatch({ type: "movies/loaded", payload: searchData.results });
  }

  function handleInputChange(e) {
    dispatch({ type: "movies/search", payload: e.target.value });
  }

  useEffect(function () {
    fetchMovies();
  }, []);

  return (
    <>
      <Header
        value={query}
        isLoading={isLoading}
        handleSearchInput={handleSearchInput}
        onChange={handleInputChange}
      />
      <div className="container">
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
    </>
  );
}

export default App;
