import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // manages states
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      console.log("value of current user is: ", currentUser);
      setUser(currentUser);
      setLoading(false);
    })
    return (() => unSubscribe());
  }, [])

  // create user with email and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // sign in user
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  // signout user
  const logOut = () =>{
    return signOut(auth);
  }

  const authInfo = {
    user,
    loading,
    createUser,
    logIn,
    logOut
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node
}

export default AuthProvider;