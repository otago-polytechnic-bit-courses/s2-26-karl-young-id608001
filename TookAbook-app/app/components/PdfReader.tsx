// Functions for reading PDF files
import { Text } from 'react-native'
import { Book } from '../../utils/interfaces'

export function PdfReader({ book }: { book: Book }) {
  return <Text>{book.title}</Text>
}
