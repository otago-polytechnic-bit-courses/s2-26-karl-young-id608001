import { useEffect, useState } from 'react'
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'
import { login } from '../api/auth'
import { router } from 'expo-router'
import { Colors } from '../theme/colours'

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
        router.replace('/(tabs)')
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

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>Log in</Text>

        {error ? <Text style={styles.error}>{error}</Text> : null}

        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Pressable
          style={styles.button}
          onPress={handleLogin}
          disabled={loading}
        >
          <Text style={styles.buttonText}>
            {loading ? 'Logging in…' : 'Log in'}
          </Text>
        </Pressable>

        <Pressable onPress={() => router.push('/registration')}>
          <Text style={styles.linkText}>Don't have an account? Register</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.background,
    alignItems: 'center',
    padding: 24,
  },
  form: {
    width: '100%',
    maxWidth: 400,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 16,
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.inputBorder,
    backgroundColor: Colors.inputBackground,
    color: Colors.inputText,
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  error: {
    color: Colors.danger,
    marginBottom: 12,
  },
  button: {
    backgroundColor: Colors.buttonBlue,
    borderRadius: 8,
    padding: 14,
    alignItems: 'center',
  },
  buttonText: { color: Colors.logButtonText, fontWeight: '600' },
  linkText: {
    marginTop: 16,
    textAlign: 'center',
    color: Colors.link,
  },
})
