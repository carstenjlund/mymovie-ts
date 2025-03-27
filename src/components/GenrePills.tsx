import { type Genre } from "@/lib/types";

type apiResponse = {
    genres: Genre[]
}
type GenrePillsProps = {
    genre_ids: number[]
}

export async function getGenres(): Promise<apiResponse> {
    const response =  await fetch("https://api.themoviedb.org/3/genre/movie/list", {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
      }
  })
  if(!response.ok) throw new Error(`Failed to load data: ${response.statusText}`)
    return await response.json()
  }

export default async function GenrePills ( {genre_ids} : GenrePillsProps) {
    const { genres } = await getGenres() 

    return (
        <div>
            {genre_ids.map(id => {
                const currentGenre = genres.find(genre => genre.id == id) as Genre
               return (<span key={id} className="text-[0.56rem] font-bold uppercase mr-1 text-blue-400 bg-blue-100 pt-0.5 pb-[0.125rem] px-2 rounded-full inline-block">{currentGenre.name}</span>)}
                
            )}
        </div>
    )
}