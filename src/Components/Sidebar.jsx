import { Link } from "react-router-dom"

export default function Sidebar() {

  return (
    <div className="w-64 bg-white shadow-lg p-5">

      <h1 className="text-xl font-bold mb-8 text-blue-600">
        🎓 College Portal
      </h1>

      <nav className="flex flex-col gap-4 text-gray-700">

        <Link className="hover:text-blue-600" to="/">
          Dashboard
        </Link>

        <Link className="hover:text-blue-600" to="/issues">
          Issues
        </Link>

        <Link className="hover:text-blue-600" to="/report">
          Report Issue
        </Link>

      </nav>

    </div>
  )
}