import { Stack } from 'expo-router'
// added to show the screen title in the header bar

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Studios' }} />
      <Stack.Screen name="login" options={{ title: 'Log in' }} />
      <Stack.Screen name="studios/[id]" options={{ title: 'Studio' }} />
    </Stack>
  )
}
