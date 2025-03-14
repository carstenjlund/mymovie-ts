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
    release_dates: ReleaseDates
}

export type ReleaseDates = {
    results: Release[]
}
export type Release = {
    iso_3166_1: string
    release_dates: {
        certification: string
    }[]
}

export type Movies = {
    results: Movie[]
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


