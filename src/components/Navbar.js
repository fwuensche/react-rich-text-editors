const Navbar = () => {
  return (
    <nav className="flex gap-3 my-3">
      <a className="navbar-brand" href="/react-rich-text-editors">
        Home
      </a>
      <a className="navbar-brand" href="/react-rich-text-editors/quill">
        Quill
      </a>
      <a className="navbar-brand" href="/react-rich-text-editors/lexical">
        Lexical
      </a>
    </nav>
  );
};

export default Navbar;
