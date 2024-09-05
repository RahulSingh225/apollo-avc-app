import { AvatarDemo } from "~/components/Avatar";
import { Container } from "~/components/Container";
import { SizableText, XStack, YStack, ScrollView, Avatar } from "tamagui";
import { CustomStepper } from "~/components/CustomStepper";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { DemoCard } from "~/components/Card";
import { Carousel } from "~/components/Carousel";
import { TestimonialCard } from "~/components/Testimonials";

export default function Home() {
  return (
    <Container>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <XStack justifyContent="flex-end" paddingHorizontal="$4">
          <Avatar size="$8">
            <Avatar.Image
              accessibilityLabel="Cam"
              src={require("../../assets/logo.png")}
              resizeMode="contain"
            />
            <Avatar.Fallback backgroundColor="$blue10" />
          </Avatar>
        </XStack>
        <AvatarDemo />
        <SizableText
          size={"$8"}
          alignSelf="center"
          color={"white"}
          fontWeight={"bold"}
        >
          Apollo Test User
        </SizableText>
        <SizableText
          size={"$5"}
          alignSelf="center"
          color={"#7c8d96"}
          fontWeight={"bold"}
        >
          Dealer Code:{" "}
        </SizableText>
        <SizableText
          size={"$5"}
          alignSelf="center"
          color={"#7c8d96"}
          fontWeight={"bold"}
          marginBottom={"$4"}
        >
          Diamond Boys Club
        </SizableText>
        <YStack
          flex={1}
          bg={"#18252b"}
          borderTopLeftRadius={"$12"}
          borderTopRightRadius={"$12"}
        >
          <SizableText
            size={"$5"}
            alignSelf="center"
            color={"#7c8d96"}
            fontWeight={"bold"}
            marginTop={"$4"}
          >
            Your Current Positioning
          </SizableText>
          <CustomStepper />

          <XStack
            bg="#445259"
            padding="$2"
            justifyContent="space-around"
            borderRadius="$6"
            alignItems="center"
            marginLeft="$8"
            marginRight="$8"
            marginBottom="$8"
          >
            <YStack justifyContent="center" alignItems="center" gap="$2">
              <FontAwesome5 name="wallet" size={28} color="gold" />
              <SizableText
                size="$2"
                alignSelf="center"
                color="white"
                textAlign="center"
                lineHeight={20}
              >
                POINTS{"\n"}SUMMARY
              </SizableText>
            </YStack>

            <YStack justifyContent="center" alignItems="center" gap="$2">
              <FontAwesome name="user" size={28} color="gold" />
              <SizableText
                size="$2"
                alignSelf="center"
                color="white"
                textAlign="center"
                lineHeight={20}
              >
                PROFILE{"\n"}DETAILS
              </SizableText>
            </YStack>
          </XStack>

          <DemoCard />
          <Carousel />
          <TestimonialCard />
        </YStack>
      </ScrollView>
    </Container>
  );
}
