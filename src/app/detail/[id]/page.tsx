import { Release, ReleaseDates, type Movie } from "@/lib/types"
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
    console.log(movie);

    function findoroRating(release_dates_array: ReleaseDates): string {
        let us_dates = release_dates_array?.results?.find(element => element.iso_3166_1 == "US")
        let rated: Release[] = us_dates?.release_dates.find(element => element.certification != "")
        return rated.certification
    }
    

    return (
        <>
        <h1>movie detail {id}</h1>

        <section>
        <div>
            <p>length:</p>
        <p>{Math.floor(movie.runtime/60)}h {movie.runtime%60}m</p>
        </div>

        <div>
            <p>Language:</p>
        <p>{movie.spoken_languages.map(language => (<span>{language.english_name}</span>))}</p>
        </div>
        <div>
            <p>Language:</p>
        <p>{findoroRating(movie.release_dates)}</p>
        </div>

        </section>
        </>
    )
}