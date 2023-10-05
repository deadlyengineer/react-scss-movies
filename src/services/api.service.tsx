import axios from "axios";
import { Movie, SearchApiResonponse } from "../types/movie.type";

const path = 'https://www.omdbapi.com/'
const apiKey = 'ffd0a43e'

/**
 * Search the movies using keyword
 * @param keyword {string} keyword
 * @returns movie list
 */
export const searchMovies = async (keyword: string): Promise<SearchApiResonponse> => {
  const result = await axios.get(`${path}?apikey=${apiKey}&s=${keyword}`);

  return result.data;
}

/**
 * Fetch the movie info
 * @param id imdbID
 * @returns movie info
 */
export const getMovie = async (id: string): Promise<Movie & {Response: string}> => {
  const result = await axios.get(`${path}?apikey=${apiKey}&i=${id}`);

  return result.data;
}