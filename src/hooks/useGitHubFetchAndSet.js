import { useState } from "react";
import { fetchUser } from "../utils/gitHubApi";
import { mungeQuery } from "../utils/mungeQuery";
import firebase from '../firbase';

const usersRef = firebase.firestore().collection('users');

export const useGitHubFetchAndSet = (users) => {

   const [error, setError] = useState(0)
   const [query, setQuery] = useState('')
   const [username, setUsername] = useState(null);

   const onSubmit = async (e) => {
      e.preventDefault();

      const washedQuery = mungeQuery(query)
       
      fetchUser(washedQuery)
        .then(data => {
            if (data.status >= 400) {
               setError(2);
               setUsername(data.login);
               return;
          } else if (users.some(user => user.id === data.id)) {
               setError(3);
               setUsername(data.login);
               return;
          }
           usersRef.doc()
               .set(data)
               .then(() => {
                  setError(1)
                  setUsername(data.login)
                })
               .catch((err) => {
                  console.error(err)
               })
        })
    setTimeout(() => {
        setError(0)
      }, 3500)
      
      
    }
   
   return {error, username, query, setQuery, onSubmit}

}
