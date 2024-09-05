import React from "react";
import { Text, StyleSheet } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  DrawerContentComponentProps,
} from "@react-navigation/drawer";
import { useSession } from "~/context/AuthContext";
import { Container } from "./Container";
import { Avatar, createTokens, SizableText, XStack, YStack } from "tamagui";
const tokens = createTokens({
  color: {
    background: "#2C3E50",
    primary: "#F1C40F",
    text: "#ECF0F1",
  },
  space: {},
  size: {},
  radius: {},
  zIndex: {},
});

export default function CustomDrawerContent(
  props: DrawerContentComponentProps
) {
  const { signOut } = useSession();
  return (
    <Container>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          flex: 1,
        }}
      >
        <Avatar circular size="$10">
          <Avatar.Image
            accessibilityLabel="Cam"
            src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
          />
          <Avatar.Fallback backgroundColor="$blue10" />
        </Avatar>
        <SizableText
          size={"$5"}
          alignSelf="center"
          color={"white"}
          fontWeight={"bold"}
        >
          Apollo Test User
        </SizableText>
        <SizableText
          size={"$3"}
          alignSelf="center"
          color={"#7c8d96"}
          fontWeight={"bold"}
        >
          Dealer Code:{" "}
        </SizableText>
        <XStack justifyContent="space-between">
          <YStack>
            <Text color={tokens.color.text} fontSize="$2">
              Earned Points
            </Text>
            <Text color={tokens.color.primary} fontSize="$4" fontWeight="bold">
              19,050
            </Text>
          </YStack>
          <YStack>
            <Text color={tokens.color.text} fontSize="$2">
              Used Points
            </Text>
            <Text color={tokens.color.primary} fontSize="$4" fontWeight="bold">
              02,050
            </Text>
          </YStack>
          <YStack>
            <Text color={tokens.color.text} fontSize="$2">
              Balance Points
            </Text>
            <Text color={tokens.color.primary} fontSize="$4" fontWeight="bold">
              17,000
            </Text>
          </YStack>
        </XStack>
        <YStack flex={1} bg={"#f8c46d"}>
          <DrawerItemList {...props} />
          <DrawerItem
            label="Sign Out"
            onPress={() => {
              signOut();
            }}
          />
        </YStack>
      </DrawerContentScrollView>
    </Container>
  );
}
