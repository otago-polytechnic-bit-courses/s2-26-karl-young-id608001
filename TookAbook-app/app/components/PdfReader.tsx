import { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Image, View } from 'react-native'

import { Book } from '../../utils/interfaces'
import { getBookPages } from '../../api/booksApi'

const BASE_URL = process.env.EXPO_PUBLIC_API_URL

export function PdfReader({ book }: { book: Book }) {
  const [pages, setPages] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadPages() {
      try {
        const data = await getBookPages(String(book.id))

        setPages(data.pages)
      } catch {
        setError('Could not load pages.')
      } finally {
        setLoading(false)
      }
    }

    loadPages()
  }, [book.id])

  if (loading) {
    return <ActivityIndicator size="large" />
  }

  if (error) {
    return <View />
  }

  return (
    <FlatList
      data={pages}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <Image
          source={{
            uri: `${BASE_URL}${item}`,
          }}
          style={{
            width: '100%',
            aspectRatio: 0.65,
          }}
          resizeMode="contain"
          removeClippedSubviews={true}
        />
      )}
    />
  )
}
