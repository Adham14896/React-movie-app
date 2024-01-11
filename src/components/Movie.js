const IMGAES_API = `https://image.tmdb.org/t/p/w1280`;

function Movie({ overview, title, poster_path, release_date, vote_average }) {
  return (
    <div className="movie">
      <img
        src={
          poster_path
            ? IMGAES_API + poster_path
            : "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=1712&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt={title}
      />
      <div className="movie-info">
        <h3>
          Name: <span>{title}</span>
        </h3>
        <h3>
          Vote Average: <span>{vote_average}⭐</span>
        </h3>
        <h3>
          Release Date: <span>{release_date}📅</span>
        </h3>
      </div>
      <div className="overview">
        <h3>overview</h3>
        <p>{overview}</p>
      </div>
    </div>
  );
}

export default Movie;
