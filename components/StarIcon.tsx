import { FontAwesome } from '@expo/vector-icons';
import { Text } from 'tamagui';

export const StarIcon = ({ filled }: { filled?: boolean }) => {
  return (
    <FontAwesome
      name={filled ? "star" : "star-o"}
      size={20}
      color="gold"
    />
  );
};
