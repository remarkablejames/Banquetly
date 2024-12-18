import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import "../global.css";
import {useColorScheme} from "~/hooks/useColorScheme";
import {Button, Pressable, View} from "react-native";
import {Feather} from "@expo/vector-icons";


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
            name="shift-details/[shiftId]"
            options={{
              title: "Shift Details",
              headerShown: true,
                headerBackTitle: "Back",
              headerBlurEffect: "light",
                headerTitleStyle: {
                    fontWeight: "bold",
                    fontSize: 20,

                },
                headerRight: () => {
                    return (

                            <Pressable className={"p-4"} onPress={() => {
                                alert("Share this shift with your friends");
                            }}>
                                <Feather name="share-2" size={24} color="black" />
                            </Pressable>
                    );
                },
              // headerBackVisible: false,
            }}
        />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
