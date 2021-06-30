export const mungeQuery = (str) => {
   const washed = str.replace(/[.,/#!$@+<>?"'%^&*;:{}=\-_`~()]/g,"")
   return washed.replace(/\s+/g, '').trim()
}