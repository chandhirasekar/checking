import Link from "next/link";
import Image from "next/image";
const HomePage = ({ data }) => {
  return (
    <main>
      {data.map((eve) => (
        <>
          <Link key={eve.id} href={`/event/${eve.id}`} passHref>
            <Image width={300} height={300} alt={eve.title} src={eve.image} />
            <h1>{eve.title}</h1>
            <p>{eve.description}</p>
          </Link>
        </>
      ))}
    </main>
  );
};
export default HomePage;
