
import { useFirebaseFetch } from "./useFirebaseFetch";
import { useGitHubFetchAndSet } from "./useGitHubFetchAndSet";



export const useFirestore = () => {

   const {
      loading,
      users,
      setUsers
   } = useFirebaseFetch();

   const {
      error,
      username,
      query,
      setQuery,
      onSubmit,
   } = useGitHubFetchAndSet(users);

   
   return {
      loading,
      users,
      error,
      username,
      query,
      onSubmit,
      setQuery,
      setUsers
   }
   
}