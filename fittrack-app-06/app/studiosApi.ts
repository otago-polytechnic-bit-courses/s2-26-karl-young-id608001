export interface StudioClass {
  duration: number
  id: number
  name: string
  people_per_class: number
  studio: number
}

export interface Studio {
  accepting_members: boolean
  city: string
  classes: StudioClass[]
  created_at: string
  id: number
  name: string
  suburb: string
}

export async function getStudios(): Promise<Studio[]> {
  const response = await fetch('http://10.0.2.2:8000/api/studios/')
  return response.json()
}

export async function getStudio(id: string): Promise<Studio> {
  const response = await fetch(`http://10.0.2.2:8000/api/studios/${id}/`)
  return response.json()
}
