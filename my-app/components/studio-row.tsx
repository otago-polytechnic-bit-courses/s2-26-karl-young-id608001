import { View, Text, Pressable, StyleSheet } from 'react-native'

interface studioRowProps {
  name: string
  suburb: string
  city: string
}

export function StudioRow({
  name,
  suburb,
  city,
  // isFavourite,
  // onToggleFavourite,
}: studioRowProps) {
  return (
    <View style={styles.card}>
      <View style={styles.thumbnail} />
      <View style={styles.details}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.meta}>
          {suburb}, {city}
        </Text>
      </View>
      {/* <Pressable onPress={onToggleFavourite}>
        <Text>{isFavourite ? '♥' : '♡'}</Text>
      </Pressable> */}
    </View>
  )
}

const styles = StyleSheet.create({
  card: { flexDirection: 'row', padding: 16, alignItems: 'center' },
  thumbnail: {
    width: 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: '#e5e7eb',
  },
  details: { marginLeft: 12, flex: 1 },
  name: { fontSize: 16, fontWeight: '600' },
  meta: { fontSize: 14, color: '#6b7280' },
})
