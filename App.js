import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import {Divider} from 'react-native-elements'
import SignUpForm from './src/components/SignUpForm'
import SignInForm from './src/components/SignInForm'
import firebase from 'firebase'
import { firebaseConfig } from './config'

export default function App() {
  useEffect(() => {
    firebase.initializeApp(firebaseConfig)
  }, [])
  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(newUser => {
      if (newUser) {
        // user is logged in
        console.log(newUser.uid)
      }
    })
    return () => {
      subscriber()
    }
  }, [])
  return (
    <View style={styles.container}>
      <SignUpForm />
      <Divider style={{ marginVertical: 20, backgroundColor: 'blue', height: 2 }} />
      <SignInForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  }
})
