import { View, Text, StyleSheet, Image } from 'react-native'
import { Colors } from '../../theme/colours'

interface BookCardProps {
  title: string
  author?: string
  genre?: string
  coverImage?: string | null
}
let placeholderImage = require('../../assets/book-cover-placeholder.png')

export default function BookCard({
  title,
  author,
  genre,
  coverImage,
}: BookCardProps) {
  return (
    <View style={styles.card}>
      {coverImage ? (
        <Image source={{ uri: coverImage }} style={styles.cover} />
      ) : (
        <Image source={placeholderImage} style={styles.cover} />
      )}

      <Text numberOfLines={2} style={styles.title}>
        {title}
      </Text>

      <Text numberOfLines={1} style={styles.author}>
        {author || 'Unknown Author'}
      </Text>

      {genre ? (
        <Text numberOfLines={1} style={styles.genre}>
          {genre}
        </Text>
      ) : null}
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    width: 140,
    marginRight: 16,
  },
  cover: {
    width: '100%',
    height: 200,
    borderRadius: 12,
  },
  coverPlaceholder: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  title: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '600',
    color: Colors.text,
  },
  author: {
    marginTop: 4,
    color: Colors.textSecondary,
    fontSize: 12,
  },
  genre: {
    marginTop: 2,
    color: Colors.textSecondary,
    fontSize: 12,
  },
})
