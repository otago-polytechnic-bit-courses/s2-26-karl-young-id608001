import { useState } from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'

interface StudioRowProps {
  name: string
  suburb: string
  city: string
}

export function StudioRow({ name, suburb, city }: StudioRowProps) {
  const [isFavorite, SetIsFavorite] = useState<boolean>(false)
  return (
    <View style={styles.card}>
      <View style={styles.details}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.meta}>
          {suburb}, {city}
        </Text>
      </View>

      <Pressable onPress={() => SetIsFavorite(!isFavorite)}>
        <Text style={styles.heart}>{isFavorite ? '♥' : '♡'}</Text>
      </Pressable>
      <View style={styles.thumbnail} />
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 12,
    margin: 4,
    alignItems: 'center',
    backgroundColor: '#55d4e2',
    borderRadius: 10,
  },
  heart: { margin: 6, fontSize: 25 },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 18,
    backgroundColor: '#e7eb11',
  },
  details: { marginLeft: 10, flex: 1 },
  name: { fontSize: 16, fontWeight: '600' },
  meta: { fontSize: 14, color: '#394150' },
})
