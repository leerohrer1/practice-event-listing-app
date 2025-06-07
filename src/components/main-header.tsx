import Link from "next/link";

function MainHeader() {
  return (
    <header>
      <div>
        <Link href="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link
              href="/events"
              style={{ color: "white", textDecoration: "none" }}
            >
              Search All Events
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
