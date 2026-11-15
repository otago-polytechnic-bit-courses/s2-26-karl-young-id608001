import { useState } from 'react'
import { uploadBook } from '../../api/booksApi'
import { Colors } from '../../theme/colours'
import { BookFormValues, GENRES } from '../../utils/interfaces'
import { Picker } from '@react-native-picker/picker'
import {
  Text,
  ActivityIndicator,
  Pressable,
  StyleSheet,
  View,
  TextInput,
} from 'react-native'

const EMPTY_FORM: BookFormValues = {
  title: '',
  author: '',
  genre: '',
}

export default function UploadScreen() {
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const [values, setValues] = useState<BookFormValues>(EMPTY_FORM)

  const [selectedFile, setSelectedFile] = useState<any>(null)
  const [selectedCover, setSelectedCover] = useState<any>(null)

  function updateField<K extends keyof BookFormValues>(
    field: K,
    value: BookFormValues[K],
  ) {
    setValues((current) => ({
      ...current,
      [field]: value,
    }))
  }

  async function handleUpload() {
    setError(null)

    if (!values.title.trim()) {
      setError('Please enter a title')
      return
    }

    if (values.title.trim().length < 3) {
      setError('Title must be at least 3 characters.')
      return
    }

    if (!selectedFile) {
      setError('Please select a book file')
      return
    }

    try {
      setLoading(true)

      const formData = new FormData()

      formData.append('title', values.title)
      formData.append('author', values.author)
      formData.append('genre', values.genre)

      formData.append('file', {
        uri: selectedFile.uri,
        name: selectedFile.name,
        type: selectedFile.mimeType,
      } as any)

      if (selectedCover) {
        formData.append('cover_image', {
          uri: selectedCover.uri,
          name: selectedCover.name,
          type: selectedCover.mimeType,
        } as any)
      }

      await uploadBook(formData)

      setValues(EMPTY_FORM)
      setSelectedFile(null)
      setSelectedCover(null)
    } catch (err) {
      setError('Could not upload book')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Upload Book</Text>

      <TextInput
        style={styles.input}
        value={values.title}
        onChangeText={(text) => updateField('title', text)}
        placeholder="Book Title"
        placeholderTextColor={Colors.textSecondary}
      />

      <TextInput
        style={styles.input}
        value={values.author}
        onChangeText={(text) => updateField('author', text)}
        placeholder="Author"
        placeholderTextColor={Colors.textSecondary}
      />

      <Picker
        selectedValue={values.genre}
        onValueChange={(value) => updateField('genre', value)}
        dropdownIconColor={Colors.text}
        style={styles.picker}
      >
        {GENRES.map((genre) => (
          <Picker.Item
            key={genre.value}
            label={genre.label}
            value={genre.value}
          />
        ))}
      </Picker>

      <Pressable style={styles.button} onPress={handleUpload}>
        <Text style={styles.buttonText}>Upload Book</Text>
      </Pressable>

      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.background,
  },
  horizontal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: Colors.text,
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 24,
  },
  input: {
    backgroundColor: Colors.surface,
    color: Colors.text,
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 12,
  },
  buttonText: {
    color: Colors.text,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
  picker: {
    backgroundColor: Colors.surface,
    borderRadius: 8,
    color: Colors.text,
    marginBottom: 12,
  },
  errorText: {
    color: Colors.danger,
    marginTop: 16,
  },
})
