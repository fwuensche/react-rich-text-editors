import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex gap-3 my-3">
      <Link className="navbar-brand" to="/">
        Home
      </Link>
      <Link className="navbar-brand" to="/quill">
        Quill
      </Link>
      <Link className="navbar-brand" to="/lexical">
        Lexical
      </Link>
    </nav>
  );
};

export default Navbar;
