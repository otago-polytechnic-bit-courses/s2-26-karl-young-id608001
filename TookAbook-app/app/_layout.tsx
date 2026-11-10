import { router, Stack } from 'expo-router'
import { clearToken } from '../api/auth'

export default function RootLayout() {
  async function handleLogout() {
    await clearToken()
    router.replace('/login')
  }
  return (
    <Stack>
      <Stack.Screen name="login" options={{ title: 'Log in' }} />
      <Stack.Screen name="registration" options={{ title: 'Register' }} />
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  )
}
