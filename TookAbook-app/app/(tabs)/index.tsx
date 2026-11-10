import { useFocusEffect, router, Link } from 'expo-router'
import { useCallback, useState } from 'react'
import { getBooks, Book } from '../../api/booksApi'
import { Colors } from '../../theme/colours'

import {
  FlatList,
  Text,
  ActivityIndicator,
  Pressable,
  StyleSheet,
  View,
} from 'react-native'

import { clearToken, getToken } from '../../api/auth'

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

  async function handleLogout() {
    await clearToken()
    router.replace('/login')
  }

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
        contentContainerStyle={styles.list}
        data={books}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Link href={`/books/${item.id}`} asChild>
            <Pressable style={styles.row}>
              <Text style={styles.rowText}>{item.title}</Text>

              <Text style={styles.rowMeta}>
                {item.author || 'Unknown Author'}
              </Text>

              <Text style={styles.rowMeta}>{item.genre}</Text>
            </Pressable>
          </Link>
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>No books uploaded yet.</Text>
        }
      />

      <Pressable style={styles.logout} onPress={handleLogout}>
        <Text style={styles.logoutText}>Log out</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 },

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

  logout: {
    padding: 16,
    alignItems: 'center',
  },

  logoutText: {
    color: Colors.logout,
    fontWeight: '600',
  },
})
