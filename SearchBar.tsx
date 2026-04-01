import { View, TextInput, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from './travelData';

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <MaterialIcons name="search" size={20} color={colors.textSecondary} />
      <TextInput
        style={styles.input}
        placeholder="Where do you want to go?"
        placeholderTextColor={colors.textMuted}
        editable={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginHorizontal: 20,
    backgroundColor: colors.glassBg,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: colors.glassBorder,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  input: {
    flex: 1,
    marginLeft: 12,
    fontSize: 14,
    color: colors.textPrimary,
    fontWeight: '500',
  },
});
