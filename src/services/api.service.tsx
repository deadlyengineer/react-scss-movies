import axios from "axios";
import { SearchApiResonponse } from "../types/movie.type";

const path = 'https://www.omdbapi.com/'
const apiKey = 'ffd0a43e'

export const searchMovies = async (keyword: string): Promise<SearchApiResonponse> => {
  const result = await axios.get(`${path}?apikey=${apiKey}&s=${keyword}`);

  return result.data;
}