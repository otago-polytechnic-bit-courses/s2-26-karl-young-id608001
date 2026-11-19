import { useLocalSearchParams } from 'expo-router'
import { useEffect, useState } from 'react'
import { getBook } from '../../api/booksApi'
import { Book } from '../../utils/interfaces'
import { ActivityIndicator, Text, View } from 'react-native'
import { ComicReader } from '../components/ComicReader'
import { PdfReader } from '../components/PdfReader'
import { EpubReader } from '../components/EpubReader'

export default function ReaderScreen() {
  const { id } = useLocalSearchParams()

  const [book, setBook] = useState<Book | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadBook() {
      try {
        const data = await getBook(id as string)
        setBook(data)
      } catch {
        setError('Could not load book.')
      } finally {
        setLoading(false)
      }
    }

    loadBook()
  }, [id])

  if (loading) {
    return <ActivityIndicator size="large" />
  }

  if (error) {
    return <Text>{error}</Text>
  }

  if (!book) {
    return <Text>Book not found.</Text>
  }

  switch (book.file_type) {
    case 'pdf':
      return <PdfReader book={book} />

    case 'epub':
      return <EpubReader book={book} />

    case 'cbz':
      return <ComicReader book={book} />
  }

  return (
    <View>
      <Text>Unsupported file type</Text>
    </View>
  )
}
