import Movie from "./Movie";

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );

  const res = await data.json();
  console.log(res);

  return (
    <div className="text-lg">
      Hello bhuws
      <div>
        {res.results.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster={movie.poster_path}
            release={movie.release_date}
          />
        ))}
      </div>
    </div>
  );
}
