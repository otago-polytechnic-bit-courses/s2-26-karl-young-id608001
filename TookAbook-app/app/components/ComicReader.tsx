// functions for reading CBZ files
import { Book } from '../../utils/interfaces'
import { Text } from 'react-native'

export function ComicReader({ book }: { book: Book }) {
  return <Text>{book.title}</Text>
}
