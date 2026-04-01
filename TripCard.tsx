import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { upcomingTrip, colors } from './travelData';
import SectionHeader from './SectionHeader';

export default function TripCard() {
  const progressPercentage =
    (upcomingTrip.daysToGo / upcomingTrip.totalDays) * 100;

  return (
    <View style={styles.container}>
      <SectionHeader title="Your Next Adventure" />
      <View style={styles.cardContainer}>
        <LinearGradient
          colors={[colors.accentPurple, colors.accentPink]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradient}
        >
          {/* Glassmorphism overlay */}
          <View style={styles.overlay} />

          {/* Content */}
          <View style={styles.content}>
            {/* Destination */}
            <View style={styles.destinationSection}>
              <MaterialIcons name="location-on" size={24} color={colors.textPrimary} />
              <View style={{ marginLeft: 12, flex: 1 }}>
                <Text style={styles.destinationLabel}>Destination</Text>
                <Text style={styles.destination}>
                  {upcomingTrip.destination}
                </Text>
              </View>
            </View>

            {/* Dates */}
            <View style={styles.datesSection}>
              <MaterialIcons name="event" size={20} color={colors.textSecondary} />
              <Text style={styles.dates}>{upcomingTrip.dates}</Text>
            </View>

            {/* Progress Bar */}
            <View style={styles.progressSection}>
              <View style={styles.progressLabel}>
                <Text style={styles.progressText}>Trip Progress</Text>
                <Text style={styles.daysToGo}>
                  {upcomingTrip.daysToGo} days to go
                </Text>
              </View>
              <View style={styles.progressBar}>
                <View
                  style={[
                    styles.progressFill,
                    { width: `${progressPercentage}%` },
                  ]}
                />
              </View>
            </View>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    backgroundColor: colors.bgPrimary,
  },
  cardContainer: {
    marginHorizontal: 20,
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 12,
  },
  gradient: {
    padding: 24,
    minHeight: 240,
    justifyContent: 'space-between',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 20,
  },
  content: {
    zIndex: 10,
  },
  destinationSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: 'rgba(255,255,255,0.1)',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
  },
  destinationLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: 'rgba(255,255,255,0.7)',
    marginBottom: 2,
  },
  destination: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  datesSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 12,
  },
  dates: {
    fontSize: 14,
    fontWeight: '500',
    color: 'rgba(255,255,255,0.9)',
    marginLeft: 8,
  },
  progressSection: {
    marginTop: 8,
  },
  progressLabel: {
    marginBottom: 8,
    paddingHorizontal: 12,
  },
  progressText: {
    fontSize: 13,
    fontWeight: '600',
    color: 'rgba(255,255,255,0.8)',
  },
  daysToGo: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.textPrimary,
    marginTop: 4,
  },
  progressBar: {
    height: 8,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 4,
    overflow: 'hidden',
    marginHorizontal: 12,
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.accentCyan,
    borderRadius: 4,
  },
});
