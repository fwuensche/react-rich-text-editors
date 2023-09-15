const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Home
      </a>
      {" | "}
      <a className="navbar-brand" href="/quill">
        Quill
      </a>
      {" | "}
      <a className="navbar-brand" href="/lexical">
        Lexical
      </a>
    </nav>
  );
};

export default Navbar;
