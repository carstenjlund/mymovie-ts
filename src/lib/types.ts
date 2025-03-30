export type Movie ={
    id: number,
    title: string,
    poster_path: string,
    backdrop_path: string,
    vote_average: number,
    overview: string, 
    runtime: number;
    original_language: string,
    genre_ids: number[]
    genres: Genre[]
    spoken_languages: Language[]
    release_dates: ReleaseResults
    credits: Credits
}

export type ReleaseResults = {
    results: ReleaseCountry[]
}


export type ReleaseCountry = {
    iso_3166_1: string
    release_dates: ReleaseDate[]
}

export type ReleaseDate = {
    certification: string
    release_date: string
}


export type Genre = {
    id: number,
    name: string
}

export type Language = {
    english_name: string
    iso_639_1: string
    name: string
}

export type Credits = {
    cast: Member[]
    crew: Member[]
}

export type Member = {
    id: number
    name: string
    profile_path: string
    character: string
}