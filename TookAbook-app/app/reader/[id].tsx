import { useLocalSearchParams } from 'expo-router'
import { useEffect, useState } from 'react'
import { getBook } from '../../api/booksApi'
import { Book } from '../../utils/interfaces'
import { ActivityIndicator, Text, View } from 'react-native'

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

  return (
    <View>
      <Text>{book.title}</Text>
      <Text>{book.author}</Text>
      <Text>{book.file}</Text>
    </View>
  )
}
