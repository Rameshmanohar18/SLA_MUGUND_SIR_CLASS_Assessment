// export default function Home(){
//   return(
//     <div className="bg-blue-100 p-10 rounded">
//       <h2 className="text-3xl font-bold mb-3">
//         Welcome to the Student Portal
//       </h2>

//       <p>
//         Report campus issues, track complaints and stay updated
//         with college announcements.
//       </p>
//     </div>
//   )
// }

export default function Home() {
  return (
    <div className="bg-white shadow-lg rounded-xl p-10 flex items-center gap-10">

      {/* Left Content */}
      <div className="flex-1">

        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Student Issue Portal
        </h2>

        <p className="text-gray-600 text-lg mb-6">
          A simple platform for students to report campus issues,
          track complaint status, and stay informed about important
          college announcements.
        </p>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Report an Issue
        </button>

      </div>

      {/* Right Image */}
     {/* <div className="flex-1">
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
          alt="Students discussion"
          className="rounded-xl shadow-md"
        />
      </div>  */}

    </div>
  );
}   