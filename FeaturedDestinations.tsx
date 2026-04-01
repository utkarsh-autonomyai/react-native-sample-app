import { useEffect } from 'react';
import {
  Animated,
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { destinations, colors } from './travelData';
import SectionHeader from './SectionHeader';
import DestinationCard from './DestinationCard';

export default function FeaturedDestinations() {
  // Create animated value for card entry animation
  const animatedValues = destinations.map(() => new Animated.Value(0));

  useEffect(() => {
    // Stagger animations for each card
    const animations = animatedValues.map((animValue, index) =>
      Animated.timing(animValue, {
        toValue: 1,
        duration: 600,
        delay: index * 150,
        useNativeDriver: true,
      })
    );

    Animated.parallel(animations).start();
  }, []);

  return (
    <View style={styles.container}>
      <SectionHeader title="Popular Destinations" linkText="See All" />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        snapToInterval={240}
        decelerationRate="fast"
        contentContainerStyle={styles.scrollContent}
      >
        {destinations.map((destination, index) => (
          <DestinationCard
            key={destination.id}
            destination={destination}
            index={index}
            animatedValue={animatedValues[index]}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
    backgroundColor: colors.bgPrimary,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingRight: 40,
  },
});
