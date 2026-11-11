import { router, Tabs } from 'expo-router'
import { Feather } from '@expo/vector-icons'
import { Pressable, StyleSheet, Text } from 'react-native'
import { Colors } from '../../theme/colours'
import { clearToken } from '../../api/auth'

export default function TabsLayout() {
  async function handleLogout() {
    await clearToken()
    router.replace('/login')
  }
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: Colors.text,
        tabBarInactiveTintColor: Colors.textSecondary,
        headerStyle: {
          backgroundColor: Colors.surface,
        },
        headerTitleStyle: {
          color: Colors.text,
          fontWeight: '600',
        },
        headerTintColor: Colors.text,
        headerRight: () => (
          <Pressable style={styles.logout} onPress={handleLogout}>
            <Feather name="log-out" size={20} color={Colors.logout} />
          </Pressable>
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={color as string} />
          ),
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          title: 'Library',
          tabBarIcon: ({ color, size }) => (
            <Feather name="book" size={size} color={color as string} />
          ),
        }}
      />
    </Tabs>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: Colors.surface,
    borderTopColor: Colors.border,
  },
  logout: {
    padding: 16,
  },
  logoutText: {
    color: Colors.logout,
    fontWeight: '600',
  },
})
