import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex gap-3 my-3">
      <Link className="btn-light" to="/">
        Home
      </Link>
      <Link className="btn-light" to="/quill">
        Quill
      </Link>
      <Link className="btn-light" to="/lexical">
        Lexical
      </Link>
    </nav>
  );
};

export default Navbar;
