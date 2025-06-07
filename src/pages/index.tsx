import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Welcome!</h2>
      <Image
        src={"/images/learning-event.jpg"}
        width={1000}
        height={700}
        alt={"learning at desk"}
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          borderRadius: "5%",
          overflow: "hidden",
          border: "2px solid white",
        }}
      />
    </div>
  );
}
