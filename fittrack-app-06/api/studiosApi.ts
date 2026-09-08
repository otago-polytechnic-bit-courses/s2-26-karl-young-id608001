import { getToken } from './auth'

const BASE_URL = 'http://127.0.0.1:8000/api'
// http://10.0.2.2:8000/ alt

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

  return fetch(`${BASE_URL}${path}`, { ...options, headers })
}

export interface StudioClass {
  id: number
  name: string
  duration: number
  people_per_class: number
}

export interface Studio {
  id: number
  name: string
  suburb: string
  city: string
  classes?: StudioClass[]
}

export async function getStudios(): Promise<Studio[]> {
  const response = await apiFetch('/studios/')

  if (!response.ok) {
    throw new Error('Could not load studios')
  }

  return response.json()
}

export async function getStudio(id: string): Promise<Studio> {
  const response = await apiFetch(`/studios/${id}/`)

  if (!response.ok) {
    throw new Error('Could not load studio')
  }

  return response.json()
}

export async function createStudio(
  studio: Omit<Studio, 'id'>,
): Promise<Studio> {
  const response = await apiFetch('/studios/', {
    method: 'POST',
    body: JSON.stringify(studio),
  })

  if (!response.ok) {
    throw new Error('Could not create studio')
  }

  return response.json()
}

export async function updateStudio(id: number, studio: Studio) {
  const response = await apiFetch(`/studios/${id}`, {
    method: 'PUT',
    body: JSON.stringify(studio),
  })

  if (!response.ok) {
    throw new Error('Could not update studio')
  }

  return response.json()
}

export async function deleteStudio(id: number) {
  const response = await apiFetch(`/studios/${id}/`, {
    method: 'DELETE',
  })

  if (!response.ok) {
    throw new Error('Could not delete studio')
  }
}
