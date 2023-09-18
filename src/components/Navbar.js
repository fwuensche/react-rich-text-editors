const Navbar = () => {
  return (
    <nav className="flex gap-3 my-3">
      <a className="navbar-brand" href="/">
        Home
      </a>
      <a className="navbar-brand" href="/quill">
        Quill
      </a>
      <a className="navbar-brand" href="/lexical">
        Lexical
      </a>
    </nav>
  );
};

export default Navbar;
