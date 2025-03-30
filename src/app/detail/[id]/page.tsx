import Image from 'next/image'
import { MdStarRate } from 'react-icons/md'
import { ReleaseCountry, ReleaseDate, ReleaseResults, type Movie } from "@/lib/types"

async function getSingleMovie(id: string): Promise<Movie> {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?append_to_response=release_dates,credits`, {
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
    const movie  = await getSingleMovie(id)
    console.log(movie)

    function findRating(release_dates_array: ReleaseResults): string {
        const us_dates = release_dates_array?.results?.find(element => element.iso_3166_1 === "US") as ReleaseCountry
        const rated = us_dates?.release_dates.find(element => element.certification !== "") as ReleaseDate        
        return rated?.certification || "N/A"
    }
    
    return (
        <>
            <Image className="w-full" src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} width="800" height="400" alt=""></Image>    
            <section className='p-4 pt-6 flex flex-col gap-4 rounded-xl -mt-2 relative z-10 bg-white dark:bg-[#171717]'>

                <h1 className='font-bold text-xl text-balance leading-none'>{movie.title}</h1>
                <div>
                    {movie.genres.map(genre => 
                        (<span key={genre.id} className="text-[0.56rem] font-bold uppercase mr-1 text-blue-400 bg-blue-100 pt-0.5 pb-[0.125rem] px-2 rounded-full inline-block">{genre.name}</span>)
                    )}
                </div>
                
                <p className='flex'><MdStarRate color='gold' size="22" className='mr-1' /> {movie.vote_average.toFixed(1)} / 10 IMDb</p>

                <div className="flex justify-between text-sm">
                    <div>
                        <p className='font-bold'>length:</p>
                        <p>{Math.floor(movie.runtime/60)}h {movie.runtime%60}m</p>
                    </div>
                    <div>
                        <p className='font-bold'>Language:</p>
                        <p>{movie.spoken_languages[0].english_name}</p>
                    </div>
                    <div>
                        <p className='font-bold'>Rating:</p>
                        <p>{findRating(movie.release_dates)}</p>
                    </div>

                </div>
                <p>{movie.overview}</p>

            </section>
            <section>
                <header className='mx-6 mt-6 mb-2'>
                <h2 className='font-bold text-lg'>Cast</h2>
                </header>
                <div className='flex overflow-x-scroll gap-4'>
                    {movie.credits.cast.map(member =>
                        (<div key={member.id} className="flex flex-col first:ml-4 last:mr-4">
                            <div className='w-20 h-28 overflow-hidden rounded '>

                            <Image className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/w500${member.profile_path}`} width="100" height="100" alt=""></Image>
                            </div>
                            <p className='mt-1 text-xs font-bold'>{member.name}</p>
                        </div>)
                    )}
                </div>
                </section>
        </>
    )
}