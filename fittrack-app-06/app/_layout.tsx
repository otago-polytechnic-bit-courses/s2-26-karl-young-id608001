import { router, Stack } from 'expo-router'
import { clearToken, getToken } from '../api/auth'

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
    </Stack>
  )
}
