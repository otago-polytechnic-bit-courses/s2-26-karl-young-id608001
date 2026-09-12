import * as SecureStore from 'expo-secure-store'

const ACCESS_KEY = 'fittrack.access'
// need the refresh token to get a new access token when the old one expires
const REFRESH_KEY = 'fittrack.refresh'

export async function saveToken(token: string, refresh: string): Promise<void> {
  await SecureStore.setItemAsync(ACCESS_KEY, token)
  await SecureStore.setItemAsync(REFRESH_KEY, refresh)
}

export async function getToken(): Promise<string | null> {
  return SecureStore.getItemAsync(ACCESS_KEY)
}

export async function getRefreshToken(): Promise<string | null> {
  return SecureStore.getItemAsync(REFRESH_KEY)
}

export async function clearToken(): Promise<void> {
  await SecureStore.deleteItemAsync(ACCESS_KEY)
  await SecureStore.deleteItemAsync(REFRESH_KEY)
}

export async function login(username: string, password: string): Promise<void> {
  // http://10.0.2.2:8000/
  const response = await fetch('http://10.0.2.2:8000/api/token/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  })

  if (!response.ok) {
    throw new Error('Invalid username or password')
  }

  const data: { access: string; refresh: string } = await response.json()
  await saveToken(data.access, data.refresh)
}
