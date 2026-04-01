import { View, Text, StyleSheet, Pressable } from 'react-native';
import { colors } from './travelData';

interface SectionHeaderProps {
  title: string;
  linkText?: string;
  onLinkPress?: () => void;
}

export default function SectionHeader({
  title,
  linkText,
  onLinkPress,
}: SectionHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {linkText && (
        <Pressable onPress={onLinkPress}>
          <Text style={styles.link}>{linkText}</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  link: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.accentCyan,
  },
});
