import { Movie } from "@/lib/types"
import Image from "next/image"
import Link from "next/link"

type ApiResponse = {
    results: Movie[]
}

export async function getData(): Promise<ApiResponse> {
    const response = await fetch("https://api.themoviedb.org/3/movie/now_playing", {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
      }
  })
  if(!response.ok) throw new Error(`Failed to load data: ${response.statusText}`)
    return await response.json()
  }
  

  export default async function NowShowing() {

    const movies = await getData()
    

    return (
        <>
        {movies.results.map(movie =>(
            <article key={movie.id} className="w-[8.75rem] shrink-0 first:ml-6 last:mr-6 relative">
                <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} width="500" height="800" alt=""></Image>
                <p>{movie.title}</p>
                <p>{movie.id}</p>

                <p>{movie.vote_average.toFixed(1)} / 10 IMDb</p>
                <Link className="absolute inset-0" href={`/detail/${movie.id}`}></Link>
            </article>
        ))}
        </>
    )

  }