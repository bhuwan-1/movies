import Link from "next/link";
import Image from "next/image";
export default function Movie({ title, id, poster, release }) {
  const imagePath = "https://image.tmdb.org/t/p/original";
  

  return (
    <div>
      <h1>{title}</h1>
      <h2>{release}</h2>
      <Link href="/asp">
        <Image src={imagePath + poster} width={800} height={800} alt={title} />
      </Link>
    </div>
  );
}
