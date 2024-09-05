import { YStack, XStack, SizableText, Image } from 'tamagui';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { StarIcon } from './StarIcon';


export const TestimonialCard = () => {
  return (
    <YStack
      bg="#445259"
      borderRadius="$6"
      padding="$4"
      width="90%"
      alignSelf="center"
      space="$3"
      shadowColor="black"
      shadowOpacity={0.2}
      shadowRadius={5}
      shadowOffset={{ height: 3, width: 0 }}
    >
      <YStack alignItems="center">
        <Image
          source={{ uri: 'https://example.com/avatar.jpg' }} // replace with actual image link
          width={80}
          height={80}
          borderRadius={40}
        />
        <XStack alignItems="center" space="$2" marginTop="$2">
          <SizableText size="$6" fontWeight="bold" color="white">
            Mr. Koppula Shankaraiah
          </SizableText>
          <FontAwesome5 name="quote-right" size={24} color="gold" />
        </XStack>
        <SizableText size="$4" color="#7c8d96" textAlign="center">
          Shri Lakshmi Ganpati Tyres {'\n'} Pedda Ambarpet, Telangana
        </SizableText>
      </YStack>

      <XStack justifyContent="center" alignItems="center" space="$1">
        <StarIcon filled />
        <StarIcon filled />
        <StarIcon filled />
        <StarIcon filled />
        <StarIcon filled />
      </XStack>

      <YStack bg="#3b4750" borderRadius="$4" padding="$4">
        <FontAwesome5 name="quote-left" size={24} color="white" />
        <SizableText size="$4" color="white" textAlign="center" marginTop="$2">
          I have enjoyed a long and productive history. Good service, good
          support from Apollo team they consistently provide a high level of
          service and remain an important partner as we continue to develop our
          organization. Apollo One Family has been a valued and trusted partner
          to me. The depth and breadth of their expertise in this industry,
          along with their commitment to their clients, set them apart. I'm
          proud to work with Apollo.
        </SizableText>
        <FontAwesome5 name="quote-right" size={24} color="white" alignSelf="flex-end" marginTop="$2" />
      </YStack>
    </YStack>
  );
};
