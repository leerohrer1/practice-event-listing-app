import Link from "next/link";

function MainHeader() {
  return (
    <header>
      <div>
        <Link href="/">Events</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/events">All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
