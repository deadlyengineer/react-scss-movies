import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Movie } from "../types/movie.type";
import ArrowIcon from "../assets/icon-arrow-grey.svg";
import ImdbIcon from "../assets/logo-imdb.svg";
import TomatoIcon from "../assets/logo-rotten-tomatoes.svg";
import HeartIcon from "../assets/icon-heart-grey.svg";
import { getMovie } from "../services/api.service";
import EmptyImage from '../assets/illustration-empty-state.png';

export const MoviePage = () => {
  const params = useParams();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [movie, setMovie] = useState<Movie | null>(null);
  const [favourite, setFavourite] = useState<boolean>(false);

  useEffect(() => {
    if (isLoading) {
      getMovie(params.id || '').then((result) => {
        setIsLoading(false);
        
        if (typeof result === 'string') {
          setMovie(null);
        } else {
          if (result.Response === 'False') {
            setMovie(null);
          } else {
            setMovie(result);
          }
        }
      }) 
    }
  }, []);

  return (
    <div className="movie-page">
      <div className="back-btn">
        <Link to='/'>
          <img src={ArrowIcon} alt="back" />
        </Link>
      </div>
      {
        isLoading
        ? <div className="loading-container">Loading...</div>
        : movie === null
        ? <div className="loading-container">
            <img src={EmptyImage} alt='empty'/>
            Movie not found
          </div>
        : <div className="movie-container">
          <div className="movie-info">
            <div className="movie-short-info">
              <div className="runtime">{movie?.Runtime}</div>
              <div className="year">{movie?.Year}</div>
              <div className="r-container">R</div>
            </div>
            <div className="title">{movie?.Title}</div>
            <div className="rating-info">
              <div className="imdb-rating">
                <div className="image-container">
                  <img src={ImdbIcon} alt="IMDB" />
                </div>
                <p>{movie?.imdbRating}/10</p>
              </div>
              <div className="tomato-rating">
                <div className="image-container">
                  <img src={TomatoIcon} alt="tomato" />
                </div>
                <p>96%</p>
              </div>
              <div className={`favourite ${favourite ? 'active' : ''}`} onClick={() => setFavourite(!favourite)}>
                <img src={HeartIcon} alt="heart" />
                <p>{favourite ? 'Added' : 'Add to favourites'}</p>
              </div>
            </div>
            <div className="plot">
              <h5>Plot</h5>
              <p>{movie?.Plot}</p>
            </div>
            <div className="movie-detail">
              <div className="cast">
                <h5>Cast</h5>
                {movie?.Actors.split(',').map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
              <div className="genre">
                <h5>Genre</h5>
                {movie?.Genre.split(',').map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
              <div className="director">
                <h5>Director</h5>
                {movie?.Director.split(',').map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
            </div>
          </div>
          <div className={`movie-media ${movie?.Poster === 'N/A' ? 'unavailable' : ''}`}>
            {
              movie?.Poster === 'N/A'
              ? <p>Image Unavailable</p>
              : <img src={movie?.Poster} alt={movie?.Title} />
            }
          </div>
        </div>
      }
    </div>
  )
}