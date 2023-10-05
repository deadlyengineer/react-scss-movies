export type Movie = {
  Title: string,
  Year: string,
  imdbID: string,
  Type: string,
  Poster: string,
  Rated: string,
  Released: string,
  Runtime: string,
  Genre: string,
  Director: string,
  Writer: string,
  Actors: string,
  Plot: string,
  Language: string,
  Country: string,
  Awards: string,
  Ratrings: {Source: string, Value: string}[],
  Metascore: string,
  imdbRating: string,
  imdbVotes: string,
  DVD: string,
  BoxOffice: string,
  Production: string,
  Website: string
}

export type SearchApiResonponse = {
  Response: boolean,
  Search?: Movie[],
  Error?: string 
}