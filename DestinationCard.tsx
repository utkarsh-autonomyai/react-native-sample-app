import {
  Animated,
  View,
  Text,
  StyleSheet,
  Pressable,
  Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { Destination, colors } from './travelData';

interface DestinationCardProps {
  destination: Destination;
  index: number;
  animatedValue: Animated.Value;
}

export default function DestinationCard({
  destination,
  index,
  animatedValue,
}: DestinationCardProps) {
  const animateDelay = index * 150;

  // Animate from opacity 0 to 1, and translateY from 40 to 0
  const opacity = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [40, 0],
  });

  return (
    <Animated.View
      style={[
        styles.cardWrapper,
        {
          opacity,
          transform: [{ translateY }],
        },
      ]}
    >
      <Pressable
        style={({ pressed }) => [
          styles.card,
          { transform: [{ scale: pressed ? 0.98 : 1 }] },
        ]}
      >
        <LinearGradient
          colors={[destination.color, `${destination.color}CC`]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradient}
        >
          {/* Price Badge */}
          <View style={styles.priceBadge}>
            <Text style={styles.priceText}>{destination.price}</Text>
          </View>

          {/* Bottom Info Section */}
          <View style={styles.infoSection}>
            <View style={styles.titleSection}>
              <Text style={styles.name}>{destination.name}</Text>
              <Text style={styles.country}>{destination.country}</Text>
            </View>

            {/* Rating Row */}
            <View style={styles.ratingRow}>
              <View style={styles.starContainer}>
                <MaterialIcons
                  name="star"
                  size={14}
                  color={colors.accentOrange}
                />
                <Text style={styles.rating}>{destination.rating}</Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  cardWrapper: {
    marginRight: 12,
    marginBottom: 4,
  },
  card: {
    width: 220,
    height: 280,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 10,
  },
  gradient: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-between',
    position: 'relative',
  },
  priceBadge: {
    alignSelf: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.4)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  priceText: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  infoSection: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
  },
  titleSection: {
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: 2,
  },
  country: {
    fontSize: 13,
    fontWeight: '400',
    color: colors.textSecondary,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  rating: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.textPrimary,
  },
});
