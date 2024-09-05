import { Ionicons } from "@expo/vector-icons";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { Redirect } from "expo-router";
import { Drawer } from "expo-router/drawer";
import CustomDrawerContent from "~/components/CustomDrawerContent";
import { useSession } from "~/context/AuthContext";
import { Text } from "react-native";

const DrawerLayout = () => {
  const { session, isLoading } = useSession();
  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  if (!session) {
    return <Redirect href="/(public)/generate-otp" />;
  }
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerPosition: "right",
        drawerType: "front",
        headerLeft: () => {
          return null;
        },
        headerRight: () => <DrawerToggleButton tintColor="white" />,
        headerStyle: {
          backgroundColor: "#18252b",
          // shadowColor: 'transparent',
          // elevation: 0
        },
        headerTintColor: "white",
      }}
    >
      <Drawer.Screen
        name="index"
        options={{
          headerTitle: "",
          drawerLabel: "Home",
          drawerIcon: ({ size, color }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="profile"
        options={{
          headerTitle: "",
          drawerLabel: "Profile",
          drawerIcon: ({ size, color }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="about-program"
        options={{
          headerTitle: "About Program",
          drawerLabel: "About Program",
          drawerIcon: ({ size, color }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="tier-slab-benefits"
        options={{
          headerTitle: "Tier Slab Benefits",
          drawerLabel: "Tier Slab Benefits",
          drawerIcon: ({ size, color }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="(campaign)"
        options={{
          headerTitle: "Program Campaigns",
          drawerLabel: "Program Campaigns",
          drawerIcon: ({ size, color }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="testimonials"
        options={{
          headerTitle: "Testimonials",
          drawerLabel: "Testimonials",
          drawerIcon: ({ size, color }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="contact-abu"
        options={{
          headerTitle: "Contact your ABU",
          drawerLabel: "Contact your ABU",
          drawerIcon: ({ size, color }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="feedback-review"
        options={{
          headerTitle: "Feedback & Review",
          drawerLabel: "Feedback & Review",
          drawerIcon: ({ size, color }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="terms-and-conditions"
        options={{
          headerTitle: "Terms and conditions",
          drawerLabel: "Terms and conditions",
          drawerIcon: ({ size, color }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="contact-avc-support"
        options={{
          headerTitle: "Contact AVC Support",
          drawerLabel: "Contact AVC Support",
          drawerIcon: ({ size, color }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;
