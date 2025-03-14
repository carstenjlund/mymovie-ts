import {  type Movies } from "@/lib/types"
import Image from "next/image"
import GenrePills from "./GenrePills"

const urls = ["https://api.themoviedb.org/3/movie/popular", "https://api.themoviedb.org/3/genre/movie/list?language=en"]
const options = {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
    }
}
export async function getData() {
  let response =  await fetch("https://api.themoviedb.org/3/movie/popular", {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
    }
})
if(!response.ok) throw new Error(`Failed to load data: ${response.statusText}`)
  return await response.json()
}

  

  export default async function PopularMovies() {

    const movies = await getData() as Movies

    return (
        <>
        
        {movies.results.map(movie =>(
            <article key={movie.id} className="grid grid-cols-[8.75rem_1fr] gap-4 mb-6">
                <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} width="500" height="800" alt=""></Image>
                <div>
                  <p>{movie.title}</p>
                  <p>{movie.vote_average.toFixed(1)} / 10 IMDb</p>
                  <GenrePills genre_ids={movie.genre_ids} />
                  <a className="absolute inset-0" href={`/detail/${movie.id}`}></a>
                </div>
            </article>
        ))}
        </>
    )

  }