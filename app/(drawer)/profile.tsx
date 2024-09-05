import { Stack } from "expo-router";
import React from "react";
import { ScrollView } from "react-native";
import { Container } from "~/components/Container";
import {
  YStack,
  XStack,
  Text,
  Image,
  Button,
  styled,
  SizableText,
} from "tamagui";
import { AvatarDemo } from "~/components/Avatar";

const Header = styled(XStack, {
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 20,
});

const ProfileImage = styled(Image, {
  width: 100,
  height: 100,
  borderRadius: 50,
});

const ProfileInfo = styled(YStack, {
  alignItems: "center",
  marginBottom: 20,
});

const InfoGrid = styled(YStack, {
  width: "100%",
});

const InfoRow = styled(XStack, {
  justifyContent: "space-between",
  marginBottom: 10,
});

const InfoCell = styled(YStack, {
  backgroundColor: "#2C2C2C",
  padding: 10,
  borderRadius: 5,
  flex: 1,
  marginHorizontal: 5,
});

const Label = styled(Text, {
  color: "#888888",
  fontSize: 12,
});

const Value = styled(Text, {
  color: "#FFFFFF",
  fontSize: 14,
});

const EditButton = styled(Button, {
  backgroundColor: "#FFD700",
  borderRadius: 20,
  paddingHorizontal: 20,
  marginTop: 20,
});

const ProfileScreen = () => {
  return (
    <Container>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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

        <InfoGrid>
          <InfoRow>
            <InfoCell>
              <Label>Date of Birth</Label>
              <Value>11/08/1980</Value>
            </InfoCell>
            <InfoCell>
              <Label>Mobile No.</Label>
              <Value>989XX989XX</Value>
            </InfoCell>
          </InfoRow>
          <InfoRow>
            <InfoCell>
              <Label>WhatsApp No.</Label>
              <Value>989XX989XX</Value>
            </InfoCell>
            <InfoCell>
              <Label>Marital Status</Label>
              <Value>Married</Value>
            </InfoCell>
          </InfoRow>
          <InfoRow>
            <InfoCell>
              <Label>Spouse Name</Label>
              <Value>Neena N Gupta</Value>
            </InfoCell>
            <InfoCell>
              <Label>Anniversary Date</Label>
              <Value>11/08/1980</Value>
            </InfoCell>
          </InfoRow>
          <InfoRow>
            <InfoCell>
              <Label>Spouse DOB</Label>
              <Value>11/08/1980</Value>
            </InfoCell>
            <InfoCell>
              <Label>Date of Joining</Label>
              <Value>11/08/1980</Value>
            </InfoCell>
          </InfoRow>
          <InfoRow>
            <InfoCell>
              <Label>Date of Active</Label>
              <Value>11/08/1980</Value>
            </InfoCell>
            <InfoCell>
              <Label>No. of Children</Label>
              <Value>02</Value>
            </InfoCell>
          </InfoRow>
          <InfoRow>
            <InfoCell>
              <Label>Child 1 Name</Label>
              <Value>Preet Gupta</Value>
            </InfoCell>
            <InfoCell>
              <Label>Child 1 DOB</Label>
              <Value>11/08/1980</Value>
            </InfoCell>
          </InfoRow>
          <InfoRow>
            <InfoCell>
              <Label>Child 2 Name</Label>
              <Value>Anshika Gupta</Value>
            </InfoCell>
            <InfoCell>
              <Label>Child 2 DOB</Label>
              <Value>11/08/1980</Value>
            </InfoCell>
          </InfoRow>
          <InfoRow>
            <InfoCell>
              <Label>Address</Label>
              <Value>C-18, Hemkunt Towers, Nehru Place</Value>
            </InfoCell>
            <InfoCell>
              <Label>Email</Label>
              <Value>s.narayan@gmail.com</Value>
            </InfoCell>
          </InfoRow>
        </InfoGrid>
        <EditButton>
          <Text color="#000000">Edit / Modify</Text>
        </EditButton>
      </ScrollView>
    </Container>
  );
};

export default ProfileScreen;
