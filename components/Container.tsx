import { StatusBar } from "expo-status-bar";
import { YStack } from "tamagui";

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <StatusBar style="light" />
      <YStack flex={1} bg={"#445259"} width={"100%"}>
        {children}
      </YStack>
    </>
  );
};
