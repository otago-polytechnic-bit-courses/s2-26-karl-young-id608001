import { useEffect, useState } from 'react'
import { View, Text, Pressable, StyleSheet, TextInput } from 'react-native'
import { Studios } from '@/assets/studios'

export function StudioForm() {
  const [name, setName] = useState('')
  const [suburb, setSuburb] = useState('')

  // adding a new studio to the list of studios when the form is submitted

  return (
    <>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Studio Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Suburb"
          value={suburb}
          onChangeText={setSuburb}
        />
        <Pressable style={styles.button} onPress={() => console.log('Submit pressed')}>
          <Text style={styles.buttonText}>Submit</Text>
        </Pressable>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    padding: 6,
    margin: 6,
    gap: 8,
    alignItems: 'center',
    backgroundColor: '#55d4e2',
    borderRadius: 10,
  },
  input: {
    color: '#000',
    fontWeight: 'bold',
    height: 40,
    backgroundColor: '#92bfd7',
  },
  button: {
    backgroundColor: '#000102',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
})
