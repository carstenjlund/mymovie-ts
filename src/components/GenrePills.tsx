import { type Genre } from "@/lib/types";

export async function getGenres() {
    let response =  await fetch("https://api.themoviedb.org/3/genre/movie/list", {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
      }
  })
  if(!response.ok) throw new Error(`Failed to load data: ${response.statusText}`)
    return await response.json()
  }

export default async function GenrePills ( {genre_ids} : {genre_ids: number[]}) {
    const { genres }: { genres: Genre[] } = await getGenres() 

    return (
        <div>
            {genre_ids.map(id => {
                let currentGenre = genres.find(genre => genre.id == id) as Genre
               return (<span key={id} className="text-[0.625rem] font-bold uppercase mr-2 text-blue-600 bg-blue-300 pt-0.5 pb-[0.125rem] px-2 rounded-full inline-block">{currentGenre.name}</span>)}
                
            )}
        </div>
    )
}