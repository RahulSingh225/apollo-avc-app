import { ScrollView } from 'react-native';
import { YStack } from 'tamagui';
import { TestimonialCard } from './Testimonials';

export const TestimonialCarousel = () => {
  return (
    <YStack>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20 }}
      >
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </ScrollView>
    </YStack>
  );
};
