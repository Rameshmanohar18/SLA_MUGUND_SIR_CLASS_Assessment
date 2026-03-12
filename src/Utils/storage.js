export const getIssues = () =>{
  const issues = localStorage.getItem("issues")
  return issues ? JSON.parse(issues) : []
}

export const saveIssue = (issue)=>{
  const issues = getIssues()
  issues.push(issue)
  localStorage.setItem("issues",JSON.stringify(issues))
}

export const deleteIssue = (id)=>{
  let issues = getIssues()
  issues = issues.filter(i => i.id !== id)
  localStorage.setItem("issues",JSON.stringify(issues))
}

export const updateIssue = (updated)=>{
  let issues = getIssues()
  issues = issues.map(i => i.id === updated.id ? updated : i)
  localStorage.setItem("issues",JSON.stringify(issues))
}