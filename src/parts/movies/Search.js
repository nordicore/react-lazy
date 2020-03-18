import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

import { findMovieByTitle, getMovieById } from '../../services/api-request';

export default function Search() {
  const { url } = useRouteMatch();
  const [movies, setMovies] = useState(null);

  const fetchMovies = async () => {
    setMovies(await findMovieByTitle('batman'))
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <h2>Movies</h2>
      <input type='text' onChange={async e => setMovies(await findMovieByTitle(e.target.value))} />
      {movies && movies.map(movie => (
        <div key={movie.id}>
          <div>{movie.title}</div>
          <div>{movie.year}</div>
          <Link to={`${url}/${movie.id}`}>
            <img src={movie.posterURL} onMouseEnter={() => getMovieById(movie.id)} />
          </Link>
        </div>
      ))}
    </div>
  );
}