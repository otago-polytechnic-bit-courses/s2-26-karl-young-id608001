import { router, Stack } from 'expo-router'
import { Colors } from '../theme/colours'

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.surface,
        },

        headerTintColor: Colors.text,

        headerTitleStyle: {
          color: Colors.text,
          fontWeight: '600',
        },

        contentStyle: {
          backgroundColor: Colors.background,
        },
      }}
    >
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
