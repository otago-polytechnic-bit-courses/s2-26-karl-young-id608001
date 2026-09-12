import * as SecureStore from 'expo-secure-store'

const ACCESS_KEY = 'fittrack.access'
// need the refresh token to get a new access token when the old one expires
const REFRESH_KEY = 'fittrack.refresh'
const BASE_URL = 'http://10.0.2.2:8000'
// http://10.0.2.2:8000/
// http://127.0.0.1:8000/

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
  const response = await fetch(`${BASE_URL}/api/token/`, {
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

export async function refreshAccessToken(): Promise<string | null> {
  const refresh = await getRefreshToken()
  if (!refresh) return null

  // Request a new access token using the refresh token
  const response = await fetch(`${BASE_URL}/api/token/refresh/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ refresh }),
  })

  // If refresh token is invalid or expired, return null
  if (!response.ok) {
    await clearToken()
    return null
  }

  // Save the new access token and return it
  const data = await response.json()
  await saveToken(data.access, data.refresh ?? refresh)
  return data.access
}
