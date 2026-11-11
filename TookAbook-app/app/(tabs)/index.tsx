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

      <Text style={styles.heading}>Recently Added</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
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
