import { Link } from "react-router-dom"

export default function Navbar(){

  return(
    <nav className="bg-white shadow-md p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl font-bold text-blue-600">
          Student Portal
        </h1>

        <div className="flex items-center gap-48">

          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>

          <Link to="/dashboard" className="hover:text-blue-600">
            Dashboard
          </Link>

          <Link to="/issues" className="hover:text-blue-600">
            Issues
          </Link>

          <Link
            to="/report"
            className="bg-blue-600 text-white px-4 py-1 rounded"
          >
            Report Issue
          </Link>
        </div>
      </div>
    </nav>
  )
}