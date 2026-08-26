import { useEffect, useState } from 'react'
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'
import { login } from './auth'

export default function loginScreen() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  return (
    <>
      <view>
        <Text>Log in</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          secureTextEntry
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Button onPress={handleLogin} />
      </view>
    </>
  )
}

const styles = StyleSheet.create({
  input: {
    margin: 0,
  },
  button: {
    padding: 2,
  },
})
