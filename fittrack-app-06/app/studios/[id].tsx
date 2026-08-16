import { useEffect, useState } from 'react'
import { getStudio, Studio } from '../studiosApi'
import { useLocalSearchParams } from 'expo-router'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'

export default function StudioDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>()
  const [error, setError] = useState<string | null>(null)
  const [studio, setStudio] = useState<Studio>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getStudio(id)
      .then((data) => {
        setStudio(data)
      })
      .catch((err) => {
        setError('Failed to load studio.')
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
    <>
      <View style={styles.card}>
        <View style={styles.details}>
          <Text style={styles.name}>{studio?.name}</Text>
          <Text style={styles.name}>{studio?.name}</Text>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
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
  card: {
    flexDirection: 'row',
    padding: 12,
    margin: 4,
    alignItems: 'center',
    backgroundColor: '#55d4e2',
    borderRadius: 10,
  },
  details: { marginLeft: 10, flex: 1 },
  name: { fontSize: 16, fontWeight: '600' },
  meta: { fontSize: 14, color: '#394150' },
})
