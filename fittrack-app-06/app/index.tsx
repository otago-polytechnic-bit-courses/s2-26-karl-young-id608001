import { Link } from 'expo-router'
import { useEffect, useState } from 'react'
import { getStudios, Studio } from './studiosApi'
import {
  FlatList,
  Text,
  ActivityIndicator,
  StyleSheet,
  View,
} from 'react-native'
import { StudioRow } from './components/studio-row'

export default function StudiosScreen() {
  const [error, setError] = useState<string | null>(null)
  const [studios, setStudios] = useState<Studio[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getStudios()
      .then((data) => {
        setStudios(data)
        setLoading(false)
      })
      .catch((err) => {
        setError('Failed to load studios.')
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <>
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" />
        </View>
      </>
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
    <FlatList
      data={studios}
      style={styles.list}
      contentContainerStyle={styles.listContent}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => (
        <Link style={styles.link} href={`/studios/${item.id}`}>
          <StudioRow name={item.name} suburb={item.suburb} city={item.city} />
        </Link>
      )}
    />
  )
}

const styles = StyleSheet.create({
  listContent: { paddingTop: 60, paddingHorizontal: 20 },
  list: { backgroundColor: '#abb6cb' },
  link: { marginTop: 6 },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },
})
