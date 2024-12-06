import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
// import { HapticTab } from '@/components/HapticTab';
// import { IconSymbol } from '@/components/ui/IconSymbol';
// import TabBarBackground from '@/components/ui/TabBarBackground';
import {useColorScheme} from "~/hooks/useColorScheme";
import {Colors} from "~/constants/Colors";
import TabBarBackground from "~/components/ui/TabBarBackground";
import {HapticTab} from "~/components/HapticTab";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'New Shifts',
          tabBarIcon: ({ color }) => <FontAwesome name="tasks" size={24} color={color} />,
        }}
      />
        <Tabs.Screen
            name="myShifts"
            options={{
                title: 'My Shifts',
                tabBarIcon: ({ color }) => <Entypo name="briefcase" size={24} color={color} />,
            }}
        />

      <Tabs.Screen
        name="explore"
        options={{
          title: 'Account',
          tabBarIcon: ({ color }) => <MaterialIcons name="account-circle" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
