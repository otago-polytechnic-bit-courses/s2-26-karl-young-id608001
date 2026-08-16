import { useEffect, useState } from 'react'
import { getStudio, Studio } from '../studiosApi'
import { useLocalSearchParams } from 'expo-router'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'

export default function StudioDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>()
  const [studio, setStudio] = useState<Studio>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getStudio(id).then((data) => {
      setStudio(data)
      setLoading(false)
    })
  }, [])

  if (loading) {
    return <ActivityIndicator />
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Studio ID</Text>
      <Text style={styles.value}>{id}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24 },
  label: { fontSize: 13, color: '#6b7280', textTransform: 'uppercase' },
  value: { fontSize: 22, fontWeight: '700', marginTop: 4 },
})
