import { useEffect, useState } from 'react'
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'
import { login } from '../api/auth'
import { router } from 'expo-router'

export default function loginScreen() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleLogin = () => {
    setLoading(true)
    setError(null)

    login(username, password)
      .then(() => {
        // do something to navigate to the page
        router.replace('/')
      })
      .catch((err) => {
        setError('Invalid username or password.')
      })
      .finally(() => {
        setLoading(false)
      })
  }

  if (loading) {
    return (
      <>
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" />
        </View>
      </>
    )
  }

  if (error) {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <Text>{error}</Text>
      </View>
    )
  }
  return (
    <>
      <View>
        <Text>Log in</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Button title="Log In" onPress={handleLogin} />
      </View>
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
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },
})
