import Image from "next/image";
import Link from "next/link";

interface EventProp {
  prop?: {
    id: string;
    title: string;
    description: string;
    location: string;
    date: string;
    image: string;
  };
}

export default function Event({ prop }: EventProp) {
  const year = prop?.date.slice(0, 4);
  const month = prop?.date.slice(5, 7);
  const day = prop?.date.slice(-2);

  if (!prop) return <h2>No Event Found</h2>;

  return (
    <>
      <div key={prop.id} className="content">
        <div className="list">
          <Link
            href={`/events/${year}/${month}/${day}`}
            style={{
              fontSize: "2rem",
              color: "black",
              textDecoration: "none",
            }}
          >
            {prop.title}
          </Link>
          <Image
            src={prop.image}
            width={300}
            height={200}
            alt={prop.title}
            style={{
              borderRadius: "5%",
              overflow: "hidden",
              border: "2px solid white",
            }}
          />
          <div>{prop.date}</div>
          <div>{prop.location}</div>
          <p>{prop.description}</p>
        </div>
      </div>
    </>
  );
}
