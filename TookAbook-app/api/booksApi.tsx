import { clearToken, getToken, refreshAccessToken } from './auth'

const BASE_URL = process.env.EXPO_PUBLIC_API_URL

async function apiFetch(
  path: string,
  options: RequestInit = {},
): Promise<Response> {
  const token = await getToken()

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options.headers as Record<string, string>),
  }

  if (token) {
    headers.Authorization = `Bearer ${token}`
  }

  let response = await fetch(`${BASE_URL}/api${path}`, {
    ...options,
    headers,
  })

  if (response.status === 401) {
    const newToken = await refreshAccessToken()

    if (!newToken) {
      await clearToken()
      return response
    }

    response = await fetch(`${BASE_URL}/api${path}`, {
      ...options,
      headers: {
        ...headers,
        Authorization: `Bearer ${newToken}`,
      },
    })
  }

  return response
}

export interface Book {
  id: number
  title: string
  author: string
  genre: string
  file: string
  cover_image?: string | null
  upload_date: string
}

export async function getBooks(): Promise<Book[]> {
  const response = await apiFetch('/books/')

  if (!response.ok) {
    throw new Error('Could not load books')
  }

  return response.json()
}

export async function getBook(id: string): Promise<Book> {
  const response = await apiFetch(`/books/${id}/`)

  if (!response.ok) {
    throw new Error('Could not load book')
  }

  return response.json()
}

export async function uploadBook(formData: FormData) {
  const token = await getToken()

  const response = await fetch(`${BASE_URL}/api/books/upload/`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  })

  if (!response.ok) {
    throw new Error('Could not upload book')
  }

  return response.json()
}
