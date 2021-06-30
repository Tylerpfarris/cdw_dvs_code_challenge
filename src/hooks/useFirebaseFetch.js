import { useEffect, useState } from "react";
import firebase from '../firebase';

const usersRef = firebase.firestore().collection('users');

export const useFirebaseFetch = () => {
   const [loading, setLoading] = useState(false)
   const [users, setUsers] = useState([])

      useEffect(() => {
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
   
   return {loading, users, setUsers}
}