import { StyleSheet, FlatList, TextInput } from 'react-native'
import { StudioRow } from '@/components/studio-row'
import { StudioForm } from '@/components/studio-form'
import { Studios } from '@/assets/studios'
import { useState } from 'react'

interface Studio {
  id: string
  name: string
  suburb: string
  city: string
}

export default function Index() {
  const [query, setQuery] = useState<string>('')

  const filtered: Studio[] = Studios.filter(
    (studio) =>
      studio.name.toLowerCase().includes(query.toLowerCase()) ||
      studio.suburb.toLowerCase().includes(query.toLowerCase()) ||
      studio.city.toLowerCase().includes(query.toLowerCase()),
  )

  return (
    <>
      <TextInput
        style={styles.input}
        placeholder="Search studios"
        value={query}
        onChangeText={setQuery}
      />
      <FlatList
        data={filtered}
        style={styles.flat}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <StudioRow name={item.name} suburb={item.suburb} city={item.city} />
        )}
      />
      <StudioForm />
    </>
  )
}

const styles = StyleSheet.create({
  input: {
    color: '#000',
    fontWeight: 'bold',
    marginTop: 32,
    height: 40,
    backgroundColor: '#92bfd7',
  },
  flat: { marginTop: 32 },
})
