export type movie ={
    id: number,
    title: string,
    poster_path: string,
    vote_average: number,
    overview: string, 
    original_language: string,
    genre_ids: number[]
}

export type movies = {
    results: movie[]
}

export type genre = {
    id: number,
    name: string
}