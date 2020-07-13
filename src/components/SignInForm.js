import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { Input, Button } from 'react-native-elements'
import axios from 'axios'
import { ROOT_URL } from '../../config'
import firebase from 'firebase'
const SignInForm = () => {
  const [phone, setPhone] = useState('')
  const [code, setCode] = useState('')

  const handleSubmit = async () => {
    try {
      console.log(phone)
      const result = await axios.post(`${ROOT_URL}/verifyOneTimePassword`, { phone, code })
      console.log(result)
      const { data } = result
      
      firebase.auth().signInWithCustomToken(data.token)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <View>
      <View style={{ marginBottom: 10 }}>
        <Input label='Enter Phone Number' value={phone} onChangeText={(text) => setPhone(text)} />
      </View>
      <View style={{ marginBottom: 10 }}>
        <Input label='Enter Code' value={code} onChangeText={(text) => setCode(text)} />
      </View>
      <Button onPress={handleSubmit} title='Submit' />
    </View>
  )
}

export default SignInForm
