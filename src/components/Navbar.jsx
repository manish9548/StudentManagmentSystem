import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-slate-900 text-white px-8 py-4 flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-bold text-orange-400">StudentMS</h1>

      <div className="flex gap-6 text-lg">
        <Link className="hover:text-orange-400" to="/">Home</Link>
        <Link className="hover:text-orange-400" to="/add">Add Student</Link>
        <Link className="hover:text-orange-400" to="/students">Students</Link>
      </div>
    </nav>
  );
}

export default Navbar;