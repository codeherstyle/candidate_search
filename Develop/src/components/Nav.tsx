import { NavLink } from "react-router-dom";

function Nav() {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  return (
    <div>
      <NavLink className="navLinks" to="/">Home</NavLink>

      <NavLink className="navLinks" to="/SavedCandidates">Saved Candidates</NavLink>

    </div>
  )
};

export default Nav;
