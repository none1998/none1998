import { useEffect, useState } from "react";
import { API_KEY, BASE_URL, TRENDING_ALL_DAY } from "../configs/database.config";

function Movies({ blockMovies, unblockMovies }) {
  const [trendingMovies, setTrendingMovies] = useState([])

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      const request = await fetch(BASE_URL + TRENDING_ALL_DAY + API_KEY)
      const data = await request.json()
      setTrendingMovies(data.results)
    }

    fetchTrendingMovies()
  }, [])

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Movies</h2>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '5px' }}>
        {
         blockMovies ? (
           <>
           <h3>Woops!</h3>
           <button onClick={() => unblockMovies()}>Unblock</button>
          </>
           ) : trendingMovies.length === 0 ? (<p>Fetching Movies...</p>) : (
            trendingMovies.map((movie) => (
              <div style={{
                padding: '20px',
                background: 'purple'
              }}>
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt='movie poster' style={{
                  width: '300px',
                  height: '450px',
                  objectFit: 'cover'
                }} />
                <p style={{
                  maxWidth: '300px',
                  maxHeight: '100px',
                  overflowY: 'hidden',
                  textAlign: 'center',
                  fontSize: '24px',
                  color: 'pink',
                  fontWeight: '700'
                }}>{movie.name || movie.title}</p>
                <hr />
                <p style={{
                  maxWidth: '300px',
                  maxHeight: '150px',
                  textAlign: 'center',
                  overflow: 'auto',
                  fontSize: '16px',
                  color: 'pink'
                }}>{movie.overview}</p>
              </div>
            ))
          )
        }
      </div>
    </div>
  );
}

export default Movies;
