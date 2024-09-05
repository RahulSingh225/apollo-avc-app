import React from 'react';
import { ScrollView, Dimensions } from 'react-native';
import { Card, XStack, YStack, SizableText } from 'tamagui';

const { width } = Dimensions.get('window');

const carouselItems = [
  { id: 1, title: 'Card 1', color: '#FF6B6B' },
  { id: 2, title: 'Card 2', color: '#4ECDC4' },
  { id: 3, title: 'Card 3', color: '#1A535C' },
  { id: 4, title: 'Card 4', color: '#FF6B6B' },
  { id: 5, title: 'Card 5', color: '#4ECDC4' },
];

export function Carousel() {
  return (
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 16 }}
    >
      {carouselItems.map((item) => (
        <Card
          key={item.id}
          width={width - 64}
          height={200}
          bg={item.color}
          borderRadius="$4"
          marginHorizontal="$4"
          shadowColor="#000"
          shadowOffset={{ width: 0, height: 2 }}
          shadowOpacity={0.8}
          shadowRadius={4}
          elevation={5}
        >
          <YStack flex={1} justifyContent="center" alignItems="center">
            <SizableText color="white" fontWeight="bold" size="$6">
              {item.title}
            </SizableText>
          </YStack>
        </Card>
      ))}
    </ScrollView>
  );
}
