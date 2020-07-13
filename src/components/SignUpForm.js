import React, { useState } from 'react'
import { View } from 'react-native'
import { Input, Button } from 'react-native-elements'
import axios from 'axios'
import { ROOT_URL } from '../../config'
const SignUpForm = () => {
  const [phone, setPhone] = useState('')

  const handleSubmit = async () => {
    try {
      console.log(phone)
      await axios.post(`${ROOT_URL}/createUser`, { phone })
      await axios.post(`${ROOT_URL}/reqOneTimePassword`, { phone })
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <View>
      <View style={{ marginBottom: 10 }}>
        <Input label='Enter Phone Number' value={phone} onChangeText={(text) => setPhone(text)} />
      </View>
      <Button onPress={handleSubmit} title='Submit' />
    </View>
  )
}

export default SignUpForm
