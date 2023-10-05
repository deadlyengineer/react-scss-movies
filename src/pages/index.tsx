import { useState } from 'react'
import SearchIcon from '../assets/icon-magnifier-grey.svg'
import EmptyImage from '../assets/illustration-empty-state.png'
import { Movie, SearchApiResonponse } from '../types/movie.type'
import { searchMovies } from '../services/api.service'
import { Link } from 'react-router-dom'

export const Home = () => {

  const [movies, setMovies] = useState<Movie[]>([]);
  const [isSearching, setSearching] = useState<boolean>(false);

  const search = (e: any) => {
    if (e.key === 'Enter') {
      setSearching(true);
      const keyword: string = e.target.value;
      searchMovies(keyword).then((result: SearchApiResonponse) => {
        const movies: Movie[] = result.Search || [];
        setMovies(movies);
        setSearching(false);
      }).catch((err) => {
        console.log(err)
      })
    }
  }
  return (
    <div className="homepage">
      <div className="search-bar">
        <input id="search-bar" type="text" placeholder='Search movies...' onKeyDown={search}/>
        <img src={SearchIcon} alt="search icon" />
      </div>
      <div className="main-container">
        {
          isSearching
          ? 
          <div className="empty-container">
            <p>Searching...</p>
          </div>
          : movies.length === 0
          ?
            <div className="empty-container">
              <img src={EmptyImage} alt='empty'/>
              <h4>Don't know what to search?</h4>
              <p>Here's an offer you can't refuse</p>
            </div>
          : <div className="movies-container">
            {movies.map((movie: Movie) => (
              <Link to='/' className='movie-item'><img src={movie.Poster} alt={movie.Title} /></Link>
            ))}
          </div>
        }
      </div>
    </div>
  )
} 