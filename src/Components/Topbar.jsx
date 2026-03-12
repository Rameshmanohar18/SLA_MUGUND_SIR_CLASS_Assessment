export default function Topbar() {

  return (
    <div className="bg-white shadow-sm p-4 flex justify-between">

      <h2 className="font-semibold text-gray-700">
        Student Dashboard
      </h2>

      <div className="flex items-center gap-4">

        <button className="bg-blue-600 text-white px-3 py-1 rounded">
          Notifications
        </button>

        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>

      </div>

    </div>
  )
}