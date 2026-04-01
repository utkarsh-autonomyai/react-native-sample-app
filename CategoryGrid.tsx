import { View, Text, StyleSheet, Pressable } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { categories, colors } from './travelData';
import SectionHeader from './SectionHeader';

function CategoryIconComponent({ iconName }: { iconName: string }) {
  // Map category icon names to actual icon components
  const getIcon = (name: string) => {
    switch (name) {
      case 'umbrella':
        return <MaterialIcons name="beach-access" size={32} color={colors.accentCyan} />;
      case 'mountain':
        return <MaterialIcons name="landscape" size={32} color={colors.accentOrange} />;
      case 'home':
        return <MaterialIcons name="apartment" size={32} color={colors.accentPink} />;
      case 'compass':
        return <MaterialIcons name="explore" size={32} color={colors.accentPurple} />;
      default:
        return <MaterialIcons name="place" size={32} color={colors.accentCyan} />;
    }
  };

  return getIcon(iconName);
}

export default function CategoryGrid() {
  return (
    <View style={styles.container}>
      <SectionHeader title="Explore by Category" />
      <View style={styles.grid}>
        {categories.map((category) => (
          <Pressable
            key={category.id}
            style={({ pressed }) => [
              styles.categoryCard,
              { opacity: pressed ? 0.8 : 1 },
            ]}
          >
            <View style={styles.iconContainer}>
              <CategoryIconComponent iconName={category.icon} />
            </View>
            <Text style={styles.categoryLabel}>{category.name}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    backgroundColor: colors.bgPrimary,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
    gap: 16,
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: '48%',
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: colors.bgSecondary,
    borderRadius: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0,212,255,0.1)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  iconContainer: {
    marginBottom: 12,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'rgba(0,212,255,0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.textPrimary,
    textAlign: 'center',
  },
});
