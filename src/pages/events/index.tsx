import { useState } from "react";
import Event from "../../components/event";
import DUMMY_WORKSHOPS from "../../../dummy-data";

export default function EventsPage() {
  const [selectedYear, setSelectedYear] = useState("2025");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [isFiltered, setIsFiltered] = useState(false);

  const workshops = DUMMY_WORKSHOPS;

  const months: Record<string, string> = {
    "01": "January",
    "02": "February",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "August",
    "09": "September",
    "10": "October",
    "11": "November",
    "12": "December",
  };

  const uniqueMonths = Array.from(
    new Set(workshops.map((event) => event.date.slice(5, 7)))
  );

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget as HTMLFormElement);

    setIsFiltered(true);
    setSelectedYear(formData.get("year")?.toString() ?? "");
    setSelectedMonth(formData.get("month")?.toString() ?? "");
  }

  const filteredWorkshops = workshops.filter(
    (event) =>
      event.date.slice(0, 4) === selectedYear &&
      event.date.slice(5, 7) === selectedMonth
  );

  function handleSeeAllClick(): void {
    setIsFiltered(false);
    setSelectedYear("");
    setSelectedMonth("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="year">Year</label>
      <select id="year" name="year">
        <option value="2025">2025</option>
        <option value="2026">2026</option>
      </select>

      <label htmlFor="month">Month</label>
      <select id="month" name="month">
        {uniqueMonths.map((month) => (
          <option key={month} value={month}>
            {months[month]}
          </option>
        ))}
      </select>

      <button type="submit">Search</button>
      <button type="button" onClick={handleSeeAllClick}>
        See All
      </button>
      {(isFiltered ? filteredWorkshops : workshops).map((event) => (
        <Event key={event.id} prop={event} />
      ))}

      {isFiltered && filteredWorkshops.length === 0 && <h2>No Events Found</h2>}
    </form>
  );
}
