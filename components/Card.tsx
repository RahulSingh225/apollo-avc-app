import type { CardProps } from "tamagui";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Button, Card, H1, Image, Stack, XStack } from "tamagui";

export function CardDemo() {
  return (
    <XStack $sm={{ flexDirection: "column" }} paddingHorizontal="$4" space>
      <DemoCard
        animation="bouncy"
        size="$4"
        width={250}
        height={300}
        scale={0.9}
        hoverStyle={{ scale: 0.925 }}
        pressStyle={{ scale: 0.875 }}
      />
      <DemoCard size="$5" width={250} height={300} />
    </XStack>
  );
}
export function DemoCard(props: CardProps) {
  return (
    <Stack padding={"$4"}>
      <Card elevate size="$11" bordered {...props}>
        <Card.Header padded>
          <H1>ENGAGEMENTS</H1>
        </Card.Header>
        <Card.Footer padded>
          <XStack flex={1} />
          <Button
            borderRadius="$2"
            iconAfter={
              <Ionicons name="arrow-forward-circle" size={24} color="white" />
            }
          >
            Explore
          </Button>
        </Card.Footer>
        <Card.Background>
          <Image
            resizeMode="contain"
            alignSelf="center"
            source={{
              width: 300,
              height: 300,
            }}
          />
        </Card.Background>
      </Card>
    </Stack>
  );
}
