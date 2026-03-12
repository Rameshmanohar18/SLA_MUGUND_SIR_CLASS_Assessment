import { useParams,useNavigate } from "react-router-dom"
import { getIssues,updateIssue } from "../Utils/storage"
import { useState,useEffect } from "react"

export default function EditIssue(){

  const {id} = useParams()
  const navigate = useNavigate()

  const [issue,setIssue] = useState(null)

  useEffect(()=>{
    const found = getIssues().find(i => i.id == id)
    setIssue(found)
  },[id])

  const update = e =>{
    e.preventDefault()
    updateIssue(issue)
    navigate("/issues")
  }

  if(!issue) return <p>Loading...</p>

  return(
    <form onSubmit={update} className="max-w-md space-y-4">

      <h2 className="text-xl font-bold">Edit Issue</h2>

      <input
        value={issue.title}
        onChange={e=>setIssue({...issue,title:e.target.value})}
        className="border p-2 w-full"
      />

      <textarea
        value={issue.description}
        onChange={e=>setIssue({...issue,description:e.target.value})}
        className="border p-2 w-full"
      />

      <select
        value={issue.status}
        onChange={e=>setIssue({...issue,status:e.target.value})}
        className="border p-2 w-full"
      >
        <option>Pending</option>
        <option>In Progress</option>
        <option>Resolved</option>
      </select>

      <button className="bg-green-600 text-white px-4 py-2">
        Update
      </button>

    </form>
  )
}