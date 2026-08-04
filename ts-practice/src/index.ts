function greet(name: string): string {
  return `Hello, ${name}`
}

console.log(greet('FitTrack'))

// const sum = (name, class_count, arrays) => {
//   return `${name} has ${class_count} classes with ${arrays} as students`
// }

// console.log(sum('Teams', 5))
// console.log(sum('CityFit', 55))

const sum = (name: string, class_count: number, arrays: string[]) => {
  return `${name} has ${class_count} classes with ${arrays} as students`
}

console.log(sum('Teams', 5, ['Dave', 'Argyle']))
console.log(sum('CityFit', 55, ['Cody', 'Greg']))

// Task 3

interface Studio {
  id: number
  name: string
  suburb: string
  city: string
  accepting_members: boolean
  created_at: string
  classes: StudioClass[];
}

type StudioId = number

interface StudioClass {
  id: number
  studio: StudioId
  name: string
  duration: number
  people_per_class: number
}

// Task 4

type MembershipStatus = 'member' | 'paused' | 'cancelled'

function describeStatus(status: MembershipStatus): string {
  if (status === 'member') return 'Currently a member'
  if (status === 'paused') return 'Membership paused'
  return 'No longer a member'
}

console.log(describeStatus('member'))

// Task 5

interface Paginated<T> {
  results: T[]
  count: number
}

function unwrap<T>(response: Paginated<T>): T {
  return response.results[0]
}

const studioResponse: Paginated<Studio> = {
  results: [
    {
      id: 1,
      name: 'CityFit',
      suburb: 'Dunedin Central',
      city: 'Dunedin',
      accepting_members: true,
      created_at: '2026-01-01',
      classes: [],
    },
  ],
  count: 1,
}

const studioClassResponse: Paginated<StudioClass> = {
  results: [
    {
      id: 1,
      studio: 1,
      name: 'CityFit',
      duration: 60,
      people_per_class: 20,
    },
  ],
  count: 1,
}

const studio: Studio = unwrap(studioResponse)
const studioClass: StudioClass = unwrap(studioClassResponse)

console.log(studio)
console.log(studioClass)

// async function fetchStudiosClasses(studioId: number): Promise<StudioClass[]> {
//   const response = await fetch(`http://127.0.0.1:8000/api/studios/${studioId}`)
//   const raw: unknown = await response.json()
//   return raw as StudioClass[] // an assertion: you are telling TypeScript to trust you here
// }

async function fetchStudiosClasses(studioId: number): Promise<StudioClass[]> {
  const response = await fetch(`http://127.0.0.1:8000/api/studios/${studioId}`)
   const studio: Studio = await response.json();
  return studio.classes; 
}


async function load() {
  const classes = await fetchStudiosClasses(2)
  console.log(classes)
}

load()
