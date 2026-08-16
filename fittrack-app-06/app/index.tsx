import { Link } from 'expo-router'
import { useEffect, useState } from 'react'
import { getStudios, Studio } from './studiosApi'
import { FlatList, Text, ActivityIndicator, StyleSheet } from 'react-native'
import { StudioRow } from './components/studio-row'

export default function StudiosScreen() {
  const [studios, setStudios] = useState<Studio[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getStudios().then((data) => {
      setStudios(data)
      setLoading(false)
    })
  }, [])

  if (loading) {
    return <ActivityIndicator />
  }

  return (
    <FlatList
      data={studios}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => (
        <Link href={`/studios/${item.id}`}>
          <StudioRow name={item.name} suburb={item.suburb} city={item.city} />
        </Link>
      )}
    />
  )
}

const styles = StyleSheet.create({
  list: { padding: 16, marginTop: 20, backgroundColor: '#f3f4f6' },
  row: {
    backgroundColor: '#73c8dd',
    margin: 4,
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#d1d5db',
  },
  rowText: { fontSize: 16, fontWeight: '500' },
})
