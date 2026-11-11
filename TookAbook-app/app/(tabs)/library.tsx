import { useFocusEffect, router, Link } from 'expo-router'
import { useCallback, useState } from 'react'
import { getBooks, Book } from '../../api/booksApi'
import BookCard from '../components/BookCards'
import { Colors } from '../../theme/colours'
import {
  FlatList,
  Text,
  ActivityIndicator,
  Pressable,
  StyleSheet,
  View,
} from 'react-native'

import { getToken } from '../../api/auth'

export default function LibraryScreen() {
  const [error, setError] = useState<string | null>(null)
  const [books, setBooks] = useState<Book[]>([])
  const [loading, setLoading] = useState(true)

  useFocusEffect(
    useCallback(() => {
      let cancelled = false

      async function load() {
        const token = await getToken()

        if (!token) {
          router.replace('/login')
          return
        }

        setLoading(true)
        setError(null)

        try {
          const data = await getBooks()

          if (!cancelled) {
            setBooks(data)
          }
        } catch {
          if (!cancelled) {
            setError('Could not load your library.')
          }
        } finally {
          if (!cancelled) {
            setLoading(false)
          }
        }
      }

      load()

      return () => {
        cancelled = true
      }
    }, []),
  )

  if (loading) {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  if (error) {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <Text>{error}</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
        data={books}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Link href={`/books/${item.id}`} asChild>
            <Pressable>
              <BookCard
                title={item.title}
                author={item.author}
                genre={item.genre}
                coverImage={item.cover_image}
              />
            </Pressable>
          </Link>
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>No books uploaded yet.</Text>
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },

  list: {
    padding: 16,
  },

  row: {
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.border,
  },

  rowText: {
    fontSize: 16,
    fontWeight: '600',
  },

  rowMeta: {
    fontSize: 13,
    color: Colors.textSecondary,
    marginTop: 2,
  },

  empty: {
    textAlign: 'center',
    color: Colors.textSecondary,
    padding: 24,
  },

  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },
})
