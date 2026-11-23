import { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Image, Text } from 'react-native'
import { getBookPages } from '../../api/booksApi'
import { Book } from '../../utils/interfaces'

const BASE_URL = process.env.EXPO_PUBLIC_API_URL

export function ComicReader({ book }: { book: Book }) {
  const [pages, setPages] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    getBookPages(String(book.id))
      .then((data) => setPages(data.pages))
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [book.id])

  if (loading) return <ActivityIndicator size="large" />
  if (error) return <Text>Could not load comic pages.</Text>

  return (
    <FlatList
      data={pages}
      keyExtractor={(page) => page}
      renderItem={({ item }) => (
        <Image
          source={{ uri: `${BASE_URL}${item}` }}
          style={{ width: '100%', aspectRatio: 0.65 }}
          resizeMode="contain"
        />
      )}
    />
  )
}
