import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from './travelData';

const { height: screenHeight } = Dimensions.get('window');

export default function HeroSection() {
  return (
    <LinearGradient
      colors={[colors.bgPrimary, '#1A1B3A', '#2D1B69']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      {/* Decorative floating circles */}
      <View style={[styles.circle, styles.circle1]} />
      <View style={[styles.circle, styles.circle2]} />
      <View style={[styles.circle, styles.circle3]} />

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.brand}>Wanderlust</Text>
        <Text style={styles.tagline}>
          Discover the world's most breathtaking destinations
        </Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    height: screenHeight * 0.4,
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 60,
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  circle: {
    position: 'absolute',
    borderRadius: 999,
    opacity: 0.15,
  },
  circle1: {
    width: 150,
    height: 150,
    top: 20,
    right: 30,
    backgroundColor: colors.accentCyan,
    shadowColor: colors.accentCyan,
    shadowOpacity: 0.4,
    shadowRadius: 30,
  },
  circle2: {
    width: 100,
    height: 100,
    bottom: 80,
    left: 20,
    backgroundColor: colors.accentPurple,
    shadowColor: colors.accentPurple,
    shadowOpacity: 0.4,
    shadowRadius: 20,
  },
  circle3: {
    width: 80,
    height: 80,
    top: 100,
    left: '50%',
    marginLeft: -40,
    backgroundColor: colors.accentPink,
    shadowOpacity: 0.3,
    shadowRadius: 15,
  },
  content: {
    alignItems: 'center',
    marginTop: 30,
    zIndex: 10,
  },
  brand: {
    fontSize: 36,
    fontWeight: '800',
    color: colors.textPrimary,
    marginBottom: 12,
    letterSpacing: 1,
  },
  tagline: {
    fontSize: 16,
    fontWeight: '400',
    color: 'rgba(255,255,255,0.7)',
    textAlign: 'center',
    maxWidth: 280,
    lineHeight: 22,
  },
});
