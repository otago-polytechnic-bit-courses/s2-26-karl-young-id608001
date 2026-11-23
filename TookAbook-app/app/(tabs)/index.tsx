import { useFocusEffect, router, Link } from 'expo-router'
import { useCallback, useState } from 'react'
import { getBooks, Book } from '../../api/booksApi'
import { Colors } from '../../theme/colours'
import BookCard from '../components/BookCards'

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
  const latestBook = [...books].sort(
    (a, b) =>
      new Date(b.upload_date).getTime() - new Date(a.upload_date).getTime(),
  )[0]

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
      <Text style={styles.heading}>Continue Reading</Text>

      <View style={styles.recentCard}>
        <Text style={styles.heading}>Recently Added</Text>
        {latestBook && (
          <Link href={`/reader/${latestBook.id}`} asChild>
            <Pressable>
              <BookCard
                title={latestBook.title}
                author={latestBook.author}
                genre={latestBook.genre}
                coverImage={latestBook.cover_image}
              />
            </Pressable>
          </Link>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  recentCard: {
    width: '90%',
    marginTop: 16,
    alignSelf: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    borderRadius: 12,
    backgroundColor: Colors.surface,
  },
  list: {
    padding: 16,
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 16,
    marginBottom: 8,
    paddingHorizontal: 16,
    color: Colors.text,
    textAlign: 'center',
  },

  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },
  logout: {
    padding: 16,
    alignItems: 'center',
  },
  logoutText: {
    color: Colors.logout,
    fontWeight: '600',
  },
})
