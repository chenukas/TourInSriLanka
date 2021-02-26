import React, { createContext, useState } from "react";

import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth()
              .signInWithEmailAndPassword(email, password)
              .then(() => {
                console.log("User logged-in successfully!");
              });
          } catch (e) {
            console.log(e);
          }
        },
        register: async (
          email,
          password,
          fullName,
          displayName,
          phoneNumber
        ) => {
          try {
            await auth()
              .createUserWithEmailAndPassword(email, password)
              .then((res) => {
                res.user.updateProfile({
                  displayName: displayName,
                });
                console.log("User registered successfully!");
              })
              .then(() => {
                firestore()
                  .collection("users")
                  .doc(auth().currentUser.uid)
                  .set({
                    //user variables
                    fullName: fullName,
                    displayName: displayName,
                    email: email,
                    phoneNumber: phoneNumber,
                    createdAt: firestore.Timestamp.fromDate(new Date()),
                  })
                  .catch((error) => {
                    console.log(
                      "Something went wrong with added user to firestore: ",
                      error
                    );
                  });
              })
              .catch((error) => {
                console.log("Something went wrong with sign up: ", error);
              });
          } catch (e) {
            console.log(e);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.log(e);
          }
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
