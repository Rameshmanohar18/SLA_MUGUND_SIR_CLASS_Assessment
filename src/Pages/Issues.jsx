import { useState,useEffect } from "react"
import { getIssues,deleteIssue } from "../Utils/storage"
import IssueCard from "../Components/IssueCard"

export default function Issues(){

  const [issues,setIssues] = useState([])

  useEffect(()=>{
    setIssues(getIssues())
  },[])

  const remove = id =>{
    deleteIssue(id)
    setIssues(getIssues())
  }

  return(
    <div>

      <h2 className="text-2xl mb-4">All Issues</h2>

      <div className="grid grid-cols-3 gap-4">

        {issues.map(issue=>(
          <IssueCard
            key={issue.id}
            issue={issue}
            remove={remove}
          />
        ))}

      </div>

    </div>
  )
}