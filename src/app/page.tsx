import NowShowing from "@/components/NowShowing";
import PopularMovies from "@/components/PopularMovies";


export default async function Home() {
  return (
    <>

    <section className="my-6">
    <header className="flex justify-between mb-6 px-6">
        <h2 className="font-bold text-2xl">Now Showing</h2>
       
        <button className="border px-4 py-1 rounded-full">see more</button>
      </header>
        <div className="flex overflow-x-scroll gap-4 no-scrollbar">
          <NowShowing />
        </div>
    </section>

    <section className="px-6 " >
      <header className="flex justify-between mb-6">
        <h2 className="font-bold text-2xl">Popular</h2>
        <button className="border px-4 py-1 rounded-full">see more</button>
      </header>
        <div>
          <PopularMovies />
        </div>
    </section>

   
    </>
  );
}
