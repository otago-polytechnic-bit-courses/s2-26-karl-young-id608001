// General user interface for the TookAbook app

export const GENRES = [
  { label: 'Fiction', value: 'fiction' },
  { label: 'Fantasy', value: 'fantasy' },
  { label: 'Science Fiction', value: 'sci_fi' },
  { label: 'Mystery', value: 'mystery' },
  { label: 'Thriller', value: 'thriller' },
  { label: 'Horror', value: 'horror' },
  { label: 'Romance', value: 'romance' },
  { label: 'Biography', value: 'biography' },
  { label: 'History', value: 'history' },
  { label: 'Educational', value: 'educational' },
  { label: 'Other', value: 'other' },
]

export const AllowedBookExtensions = [
  'epub',
  'pdf',
  'cbz',
  'cbr',
  'azw3',
  'mobi',
  'fb2',
  'txt',
]
export interface BookFormValues {
  title: string
  author: string
  genre: string
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

export interface BookCardProps {
  title: string
  author?: string
  genre?: string
  coverImage?: string | null
}
