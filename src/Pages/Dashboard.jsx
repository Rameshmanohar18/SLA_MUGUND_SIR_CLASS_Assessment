// import { getIssues } from "../Utils/storage"

// export default function Dashboard(){

//   const issues = getIssues()

//   const pending = issues.filter(i => i.status==="Pending").length
//   const resolved = issues.filter(i => i.status==="Resolved").length

//   return(
//     <div>

//       <h2 className="text-2xl mb-6 font-bold">Dashboard</h2>

//       <div className="grid grid-cols-3 gap-4">

//         <div className="bg-yellow-200 p-6 rounded">
//           Pending Issues: {pending}
//         </div>

//         <div className="bg-green-200 p-6 rounded">
//           Resolved Issues: {resolved}
//         </div>

//         <div className="bg-blue-200 p-6 rounded">
//           Total Issues: {issues.length}
//         </div>

//       </div>
//     </div>
//   )
// }
import { getIssues } from "../utils/storage"

export default function Dashboard(){

  const issues = getIssues()

  const pending = issues.filter(i=>i.status==="Pending").length
  const resolved = issues.filter(i=>i.status==="Resolved").length

  return (

    <div>

      <h1 className="text-2xl font-bold mb-6">
        Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-6">

        <div className="bg-white shadow p-6 rounded-lg">
          <p className="text-gray-500">Total Issues</p>
          <h2 className="text-3xl font-bold">{issues.length}</h2>
        </div>

        <div className="bg-white shadow p-6 rounded-lg">
          <p className="text-gray-500">Pending</p>
          <h2 className="text-3xl font-bold text-yellow-500">
            {pending}
          </h2>
        </div>

        <div className="bg-white shadow p-6 rounded-lg">
          <p className="text-gray-500">Resolved</p>
          <h2 className="text-3xl font-bold text-green-500">
            {resolved}
          </h2>
        </div>

      </div>

    </div>
  )
}