import Image from 'next/image'
import { ReleaseCountry, ReleaseDate, ReleaseResults, type Movie } from "@/lib/types"
async function getSingleMovie(id: string) {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?append_to_response=release_dates`, {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
        }
    })
    if(!response.ok) throw new Error(`Failed to load data: ${response.statusText}`)
    return response.json()
}

export default async function Page({ params }: { params: Promise<{ id: string }>}) {
    
    const { id } = await params
    const movie: Movie  = await getSingleMovie(id)

    function findRating(release_dates_array: ReleaseResults): string {
        const us_dates = release_dates_array?.results?.find(element => element.iso_3166_1 === "US") as ReleaseCountry
        const rated = us_dates?.release_dates.find(element => element.certification !== "") as ReleaseDate        
        return rated?.certification || "N/A"
    }
    
    return (
        <>
            <Image className="w-full" src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} width="800" height="400" alt=""></Image>    
            <h1>{movie.title}</h1>
            <p>{movie.vote_average.toFixed(1)} / 10 IMDb</p>

            <section className="flex justify-between">
            <div>
                <p>length:</p>
                <p>{Math.floor(movie.runtime/60)}h {movie.runtime%60}m</p>
            </div>
            <div>
                <p>Language:</p>
                <p>{movie.spoken_languages.map(language => (<span className="mr-1" key={language.english_name}>{language.english_name}</span> ))}</p>
            </div>
            <div>
                <p>Rating:</p>
                <p>{findRating(movie.release_dates)}</p>
            </div>

            </section>
            <p>{movie.overview}</p>
        </>
    )
}