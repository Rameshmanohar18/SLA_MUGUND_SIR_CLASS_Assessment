

// import { useEffect, useState } from "react";
// import { getIssues } from "../utils/storage";

// export default function Dashboard() {

//   const [issues, setIssues] = useState([]);

//   useEffect(() => {
//     setIssues(getIssues());
//   }, []);

//   const pending = issues.filter(i => i.status === "Pending").length;
//   const resolved = issues.filter(i => i.status === "Resolved").length;

//   return (
//     <div className="space-y-6">

//       <h1 className="text-2xl font-bold">Dashboard</h1>

//       {/* Stats */}
//       <div className="grid grid-cols-3 gap-6">

//         <div className="card">
//           <p className="text-gray-500">Total Issues</p>
//           <h2 className="text-3xl font-bold">{issues.length}</h2>
//         </div>

//         <div className="card">
//           <p className="text-gray-500">Pending</p>
//           <h2 className="text-3xl font-bold text-yellow-500">
//             {pending}
//           </h2>
//         </div>

//         <div className="card">
//           <p className="text-gray-500">Resolved</p>
//           <h2 className="text-3xl font-bold text-green-500">
//             {resolved}
//           </h2>
//         </div>

//       </div>

//       {/* Latest Issues */}

//       <div className="card">

//         <h2 className="text-lg font-semibold mb-3">
//           Recent Issues
//         </h2>

//         {issues.slice(-5).reverse().map(issue => (
//           <div
//             key={issue.id}
//             className="border-b py-2 flex justify-between"
//           >
//             <span>{issue.title}</span>

//             <span className="text-sm text-gray-500">
//               {issue.status}
//             </span>
//           </div>
//         ))}

//       </div>

//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { getIssues } from "../Utils/storage.js";

export default function Dashboard() {

  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const storedIssues = getIssues();
    setIssues(storedIssues);
  }, []);

  const total = issues.length;

  const pending = issues.filter(
    issue => issue.status === "Pending"
  ).length;

  const resolved = issues.filter(
    issue => issue.status === "Resolved"
  ).length;

  return (
    <div className="space-y-6">

      <h1 className="text-2xl font-bold">Dashboard</h1>

      {/* Stats */}

      <div className="grid grid-cols-3 gap-6">

        <div className="bg-white shadow p-6 rounded-lg">
          <p className="text-gray-500">Total Issues</p>
          <h2 className="text-3xl font-bold">{total}</h2>
        </div>

        <div className="bg-white shadow p-6 rounded-lg">
          <p className="text-gray-500">Pending Issues</p>
          <h2 className="text-3xl font-bold text-yellow-500">
            {pending}
          </h2>
        </div>

        <div className="bg-white shadow p-6 rounded-lg">
          <p className="text-gray-500">Resolved Issues</p>
          <h2 className="text-3xl font-bold text-green-500">
            {resolved}
          </h2>
        </div>

      </div>

      {/* Recent Issues */}

      <div className="bg-white shadow p-6 rounded-lg">

        <h2 className="text-lg font-semibold mb-4">
          Recent Issues
        </h2>

        {issues.length === 0 ? (
          <p className="text-gray-500">
            No issues reported yet
          </p>
        ) : (
          issues.slice(-5).reverse().map(issue => (
            <div
              key={issue.id}
              className="border-b py-2 flex justify-between"
            >
              <span>{issue.title}</span>

              <span className="text-sm text-gray-500">
                {issue.status}
              </span>
            </div>
          ))
        )}

      </div>

    </div>
  );
}