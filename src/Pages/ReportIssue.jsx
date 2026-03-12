import { useState } from "react"
import { saveIssue } from "../Utils/storage"
import { useNavigate } from "react-router-dom"

export default function ReportIssue(){

  const navigate = useNavigate()

  const [title,setTitle] = useState("")
  const [category,setCategory] = useState("")
  const [description,setDescription] = useState("")

  const submit = e =>{
    e.preventDefault()

    const issue = {
      id:Date.now(),
      title,
      category,
      description,
      status:"Pending"
    }

    saveIssue(issue)
    navigate("/issues")
  }

  return(
    <form onSubmit={submit} className="max-w-md space-y-4">

      <h2 className="text-xl font-bold">Report Issue</h2>

      <input
        className="border p-2 w-full"
        placeholder="Issue title"
        onChange={e=>setTitle(e.target.value)}
      />

      <select
        className="border p-2 w-full"
        onChange={e=>setCategory(e.target.value)}
      >
        <option>Category</option>
        <option>Hostel</option>
        <option>Canteen</option>
        <option>Transport</option>
        <option>Infrastructure</option>
      </select>

      <textarea
        className="border p-2 w-full"
        placeholder="Description"
        onChange={e=>setDescription(e.target.value)}
      />

      <button className="bg-blue-600 text-white px-4 py-2">
        Submit
      </button>

    </form>
  )
}