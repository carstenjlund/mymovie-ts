import {  type Movie } from "@/lib/types"
import Image from "next/image"
import GenrePills from "./GenrePills"
import { MdStarRate } from "react-icons/md"

type ApiResponse = {
    results: Movie[]
}

export async function getData(): Promise<ApiResponse> {
  const response =  await fetch("https://api.themoviedb.org/3/movie/popular", {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
    }
})
if(!response.ok) throw new Error(`Failed to load data: ${response.statusText}`)
  return await response.json()
}

  

  export default async function PopularMovies() {

    const movies = await getData()

    return (
        <>
        
        {movies.results.map(movie =>(
            <article key={movie.id} className="grid grid-cols-[8.75rem_1fr] gap-4 mb-6 relative">
                <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} width="500" height="800" alt=""></Image>
                <div>
                  <p className="font-semibold mb-1 text-balance">{movie.title}</p>
                <p className="text-sm flex mb-1.5"><MdStarRate color='gold' size="18" className='mr-1' />{movie.vote_average.toFixed(1)} / 10 IMDb</p>
                  <GenrePills genre_ids={movie.genre_ids} />
                  <a className="absolute inset-0" href={`/detail/${movie.id}`}></a>
                </div>
            </article>
        ))}
        </>
    )

  }