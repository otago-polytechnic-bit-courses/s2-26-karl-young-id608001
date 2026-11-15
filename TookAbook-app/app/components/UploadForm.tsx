import { useState } from 'react'
import { uploadBook } from '../../api/booksApi'
import { Colors } from '../../theme/colours'
import { Picker } from '@react-native-picker/picker'
import * as DocumentPicker from 'expo-document-picker'
import * as ImagePicker from 'expo-image-picker'
import {
  BookFormValues,
  AllowedBookExtensions,
  GENRES,
} from '../../utils/interfaces'
import {
  Text,
  ActivityIndicator,
  Pressable,
  StyleSheet,
  View,
  TextInput,
} from 'react-native'
import { File } from 'expo-file-system'

const EMPTY_FORM: BookFormValues = {
  title: '',
  author: '',
  genre: '',
}
const MAX_BOOK_SIZE = 200 * 1024 * 1024 // 200 MB

export default function UploadScreen() {
  const [success, setSuccess] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [values, setValues] = useState<BookFormValues>(EMPTY_FORM)
  const [selectedFile, setSelectedFile] =
    useState<DocumentPicker.DocumentPickerAsset | null>(null)
  const [selectedCover, setSelectedCover] =
    useState<ImagePicker.ImagePickerAsset | null>(null)

  async function pickBook() {
    const result = await DocumentPicker.getDocumentAsync({
      copyToCacheDirectory: true,
    })

    if (result.canceled) {
      return
    }

    const asset = result.assets[0]
    // Check if file is too big
    if ((asset.size ?? 0) > MAX_BOOK_SIZE) {
      setError('Books must be smaller than 200 MB.')
      return
    }

    const extension = result.assets[0].name.split('.').pop()?.toLowerCase()

    if (!AllowedBookExtensions.includes(extension ?? '')) {
      setError(
        'Only PDF, EPUB, MOBI, CBZ, CBR, AZW3, FB2 and TXT files are supported.',
      )
      return
    }

    setSelectedFile(result.assets[0])
  }
  async function pickCover() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      quality: 1,
    })

    if (!result.canceled) {
      setSelectedCover(result.assets[0])
    }
  }

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
    setSuccess('')
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
      setIsSubmitting(true)

      const formData = new FormData()
      const fileResponse = await fetch(selectedFile.uri)
      const fileBlob = await fileResponse.blob()

      formData.append('title', values.title)
      formData.append('author', values.author)
      formData.append('genre', values.genre)
      formData.append('file', fileBlob, selectedFile.name)

      if (selectedCover) {
        formData.append(
          'cover_image',
          new File(selectedCover.uri),
          selectedCover.fileName || 'cover.png',
        )
      }

      await uploadBook(formData)

      setSuccess('Book uploaded successfully.')
      setValues(EMPTY_FORM)
      setSelectedFile(null)
      setSelectedCover(null)
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not upload book')
    } finally {
      setIsSubmitting(false)
    }
  }
  if (isSubmitting) {
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

      <Text style={styles.label}>Book File (Less than 200Mb)</Text>

      <Pressable style={styles.fileButton} onPress={pickBook}>
        <Text style={styles.buttonText}>Select Book</Text>
      </Pressable>

      <Text style={styles.fileName}>
        {selectedFile ? selectedFile.name : 'No file selected'}
      </Text>

      <Text style={styles.label}>Cover Image (Optional)</Text>

      <Pressable style={styles.fileButton} onPress={pickCover}>
        <Text style={styles.buttonText}>Select Cover</Text>
      </Pressable>

      <Text style={styles.fileName}>
        {selectedCover
          ? (selectedCover.fileName ?? selectedCover.uri)
          : 'No image selected'}
      </Text>
      <Pressable
        style={styles.button}
        onPress={handleUpload}
        disabled={isSubmitting}
      >
        <Text style={styles.buttonText}>
          {isSubmitting ? 'Uploading...' : 'Upload Book'}
        </Text>
      </Pressable>

      {success && <Text style={styles.successText}>{success}</Text>}
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
  label: {
    color: Colors.text,
    marginBottom: 8,
    marginTop: 8,
    fontWeight: '600',
  },
  fileButton: {
    backgroundColor: Colors.surface,
    borderColor: Colors.border,
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
  },
  fileName: {
    color: Colors.textSecondary,
    marginTop: 8,
    marginBottom: 16,
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
  successText: {
    color: Colors.success,
    marginTop: 16,
  },
})
