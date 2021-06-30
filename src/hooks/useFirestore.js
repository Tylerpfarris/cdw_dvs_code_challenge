  
import { useEffect, useState } from "react";
import { fetchUser } from "../utils/gitHubApi";
import firebase from '../firbase';


export const useFirestore = () => {

   const [loading, setLoading] = useState(false)
   const [users, setUsers] = useState([])
   const [error, setError] = useState(0)
   const [query, setQuery] = useState('')
   const [username, setUsername] = useState(null);
   
   const usersRef = firebase.firestore().collection('users');

    const onSubmit = async (e) => {
    e.preventDefault();

       const mungeQuery = (str) => {
          return str.replace(/\s+/g, '').trim() 
       }

       const washedQuery = mungeQuery(query)
       
       fetchUser(washedQuery)
        .then(data => {
           console.log(data)
          if (data.status >= 400) {
            setError(2);
            setUsername(data.login);
          } else if (users.some(user => user.id === data.id)) {
            setError(3);
            setUsername(data.login);
            return;
          }

           usersRef.doc()
             console.log(data)
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

   useEffect(() => {
      const usersRef = firebase.firestore().collection('users');
       const getUsersFromFB = () => {
         setLoading(true);
         usersRef.onSnapshot((querySnapshot) => {
            const usersDB = [];
            querySnapshot.forEach((doc) => {
               usersDB.push(doc.data());
            });
         setUsers(usersDB);
         setLoading(false);
   
         })
      }
       getUsersFromFB();
       return;
   }, [])
   
   return { loading, users, error, username, query, onSubmit, setQuery, setUsers}
   
}