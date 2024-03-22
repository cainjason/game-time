function Sidenav() {
  return (
    <nav className="flex justify-between mr-5 ml-5 text-3xl font-black">
      <h2>
        <a className="hover:text-red-300" href="/home">
          Home
        </a>
      </h2>
      <h2>
        <a className="hover:text-red-300" href="/calendar">
          Calendar
        </a>
      </h2>
      <h2>
        <a className="hover:text-red-300" href="/contacts">
          Contacts
        </a>
      </h2>
      <h2>
        <a className="hover:text-red-300" href="/ministry">
          Our Ministry
        </a>
      </h2>
      <h2>
        <a className="hover:text-red-300" href="/media">
          Media
        </a>
      </h2>
    </nav>
  );
}

export default Sidenav;
