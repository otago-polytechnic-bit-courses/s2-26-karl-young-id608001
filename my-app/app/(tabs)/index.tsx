import { StyleSheet, FlatList } from 'react-native'
import { StudioRow } from '@/components/studio-row'
import { Studios } from '@/assets/studios'

export default function Index() {
  return (
    <>
      <FlatList
        data={Studios}
        style={styles.flat}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <StudioRow name={item.name} suburb={item.suburb} city={item.city} />
        )}
      />
    </>
  )
}

const styles = StyleSheet.create({
  flat: { marginTop: 32 },
})
