// export const getIssues = () =>{
//   const issues = localStorage.getItem("issues")
//   return issues ? JSON.parse(issues) : []
// }

// export const saveIssue = (issue)=>{
//   const issues = getIssues()
//   issues.push(issue)
//   localStorage.setItem("issues",JSON.stringify(issues))
// }

// export const deleteIssue = (id)=>{
//   let issues = getIssues()
//   issues = issues.filter(i => i.id !== id)
//   localStorage.setItem("issues",JSON.stringify(issues))
// }

// export const updateIssue = (updated)=>{
//   let issues = getIssues()
//   issues = issues.map(i => i.id === updated.id ? updated : i)
//   localStorage.setItem("issues",JSON.stringify(issues))
// }

const STORAGE_KEY = "college_issues";

/* Get all issues */
export function getIssues() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

/* Save new issue */
export function addIssue(issue) {
  const issues = getIssues();
  issues.push(issue);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(issues));
}

/* Delete issue */
export function deleteIssue(id) {
  const issues = getIssues().filter(i => i.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(issues));
}

/* Update issue */
export function updateIssue(updated) {
  const issues = getIssues().map(i =>
    i.id === updated.id ? updated : i
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(issues));
}