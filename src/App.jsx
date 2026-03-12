
import { Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import Dashboard from "./Pages/Dashboard"
import Issues from "./Pages/Issues"
import ReportIssue from "./Pages/ReportIssue"
import EditIssue from "./Pages/EditIssue"

function App(){
  return(
    <>
      <Navbar/>

      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/issues" element={<Issues/>}/>
          <Route path="/report" element={<ReportIssue/>}/>
          <Route path="/edit/:id" element={<EditIssue/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App