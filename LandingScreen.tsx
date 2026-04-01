import {
  ScrollView,
  View,
  SafeAreaView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import HeroSection from './HeroSection';
import SearchBar from './SearchBar';
import FeaturedDestinations from './FeaturedDestinations';
import CategoryGrid from './CategoryGrid';
import TripCard from './TripCard';
import CTAButton from './CTAButton';
import { colors } from './travelData';

const { height: screenHeight } = Dimensions.get('window');

export default function LandingScreen() {
  const handleStartExploring = () => {
    // Navigation or action handler would go here
    console.log('Start Exploring pressed');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={colors.bgPrimary} />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
      >
        {/* Hero Section */}
        <HeroSection />

        {/* Search Bar - overlapping hero */}
        <View style={styles.searchBarContainer}>
          <SearchBar />
        </View>

        {/* Featured Destinations */}
        <FeaturedDestinations />

        {/* Category Grid */}
        <CategoryGrid />

        {/* Upcoming Trip Card */}
        <TripCard />

        {/* CTA Button */}
        <View style={styles.ctaContainer}>
          <CTAButton title="Start Exploring" onPress={handleStartExploring} />
        </View>

        {/* Bottom spacing */}
        <View style={styles.bottomSpacer} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.bgPrimary,
  },
  scrollView: {
    flex: 1,
    backgroundColor: colors.bgPrimary,
  },
  searchBarContainer: {
    marginTop: -40,
    paddingBottom: 20,
    zIndex: 20,
  },
  ctaContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
  },
  bottomSpacer: {
    height: 40,
  },
});
