import { useRouter } from "next/router";
import DUMMY_WORKSHOPS from "../../../dummy-data";
import Event from "@/components/event";

export default function EventDetails() {
  const { slug } = useRouter().query;
  const workshops = DUMMY_WORKSHOPS;

  if(!slug) return <p>Error Loading Page</p>

  const event = workshops.find(
    (event) =>
      event.date.slice(0, 4) === slug[0] &&
      event.date.slice(5, 7) === slug[1] &&
      event.date.slice(-2) === slug[2]
  );


    return <Event prop={event}></Event>

}