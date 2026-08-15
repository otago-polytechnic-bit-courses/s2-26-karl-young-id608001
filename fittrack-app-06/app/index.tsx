import { Link } from 'expo-router'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { Studios } from '../assets/studios'

export default function StudiosScreen() {
  return (
    <FlatList
      contentContainerStyle={styles.list}
      data={Studios}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Link href={`/studios/${item.id}`} style={styles.row}>
          <Text style={styles.rowText}>{item.name}</Text>
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
