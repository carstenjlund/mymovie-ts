export type Movie ={
    id: number,
    title: string,
    poster_path: string,
    vote_average: number,
    overview: string, 
    original_language: string,
    genre_ids: number[]
}

export type Movies = {
    results: Movie[]
}

export type Genre = {
    id: number,
    name: string
}