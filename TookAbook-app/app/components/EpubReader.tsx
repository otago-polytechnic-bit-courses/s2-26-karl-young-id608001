// Functions for reading Epub files
import { Text } from 'react-native'
import { Book } from '../../utils/interfaces'

export function EpubReader({ book }: { book: Book }) {
  return <Text>{book.title}</Text>
}
