export type Movie = {
  Title: string,
  Year: string,
  imdbID: string,
  Type: string,
  Poster: string
}

export type SearchApiResonponse = {
  Response: boolean,
  Search?: Movie[],
  Error?: string 
}