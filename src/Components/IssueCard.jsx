// import { Link } from "react-router-dom"

// export default function IssueCard({issue,remove}){

//   return(
//     <div className="border p-4 rounded shadow">

//       <h3 className="font-bold">{issue.title}</h3>

//       <p className="text-sm text-gray-500">
//         Category: {issue.category}
//       </p>

//       <p className="mt-2">{issue.description}</p>

//       <p className="mt-2 text-blue-600">
//         Status: {issue.status}
//       </p>

//       <div className="flex gap-3 mt-3">

//         <Link
//           to={`/edit/${issue.id}`}
//           className="bg-yellow-500 text-white px-3 py-1"
//         >
//           Edit
//         </Link>

//         <button
//           onClick={()=>remove(issue.id)}
//           className="bg-red-500 text-white px-3 py-1"
//         >
//           Delete
//         </button>

//       </div>

//     </div>
//   )
// }


export default function IssueCard({ issue }) {

  return (

    <div className="bg-white shadow-md p-5 rounded-lg hover:shadow-xl transition">

      <h3 className="font-semibold text-lg">
        {issue.title}
      </h3>

      <p className="text-gray-500 text-sm">
        {issue.category}
      </p>

      <p className="mt-2 text-gray-700">
        {issue.description}
      </p>

      <div className="mt-3">

        <span className="
        text-xs px-2 py-1 rounded
        bg-yellow-200 text-yellow-800
        ">
          {issue.status}
        </span>

      </div>

    </div>

  )
}