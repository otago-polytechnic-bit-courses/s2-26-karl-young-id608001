import { router, Stack } from 'expo-router'
import { clearToken, getToken } from '../api/auth'
import { Pressable, Text, StyleSheet } from 'react-native'

// added to show the screen title in the header bar

export default function RootLayout() {
  async function handleLogout() {
    await clearToken()
    router.replace('/login')
  }
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Studios' }} />
      <Stack.Screen name="login" options={{ title: 'Log in' }} />
      <Stack.Screen name="studios/[id]" options={{ title: 'Studio' }} />
      <Pressable style={styles.logout} onPress={handleLogout}>
        <Text style={styles.logoutText}>Log out</Text>
      </Pressable>
    </Stack>
  )
}

const styles = StyleSheet.create({
  logout: { padding: 16, alignItems: 'center' },
  logoutText: { color: '#dc2626', fontWeight: '600' },
})
