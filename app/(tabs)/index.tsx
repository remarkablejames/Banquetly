import {Image, StyleSheet, Platform, View, Pressable, RefreshControl} from 'react-native';

import {Tabs, TabsContent, TabsList, TabsTrigger} from "~/components/ui/tabs";
import {Text} from "~/components/ui/text";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "~/components/ui/card";
import {SafeAreaView} from "react-native-safe-area-context";
import React, { useState } from "react";
import {H3, P, Small} from "~/components/ui/typography";
import {Badge} from "~/components/ui/badge";

import { ScrollView } from "react-native";
import {ThemeToggle} from "~/components/ThemeToggle";
import {Href, router} from "expo-router";

const cardData = [
  {
    title: "Wait Staff",
    rate: "$20.0/hr",
    schedule: "Thu. Dec 16, 8:00 AM - 4:00 PM",
    location: "📍 Infinity Convention Centre",
    imageUri: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
  },
  {
    title: "Bartender",
    rate: "$25.0/hr",
    schedule: "Fri. Dec 17, 5:00 PM - 11:00 PM",
    location: "📍 Ottawa Conference Center",
    imageUri: "https://images.pexels.com/photos/593321/pexels-photo-593321.jpeg",
  },
  {
    title: "Chef Assistant",
    rate: "$18.5/hr",
    schedule: "Sat. Dec 18, 9:00 AM - 3:00 PM",
    location: "📍 The Westin Ottawa",
    imageUri: "https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg",
  },
  {
    title: "Event Coordinator",
    rate: "$22.0/hr",
    schedule: "Sun. Dec 19, 12:00 PM - 8:00 PM",
    location: "📍 Hilton Garden Inn",
    imageUri: "https://images.pexels.com/photos/374147/pexels-photo-374147.jpeg",
  },
  {
    title: "Dishwasher",
    rate: "$17.0/hr",
    schedule: "Mon. Dec 20, 6:00 PM - 11:00 PM",
    location: "📍 Rideau Canal Pavilion",
    imageUri: "https://images.pexels.com/photos/221357/pexels-photo-221357.jpeg",
  },
  {
    title: "Event Security",
    rate: "$21.0/hr",
    schedule: "Tue. Dec 21, 4:00 PM - 10:00 PM",
    location: "📍 Shaw Centre",
    imageUri: "https://images.pexels.com/photos/221357/pexels-photo-221357.jpeg",
  },
  {
    title: "Catering Staff",
    rate: "$19.0/hr",
    schedule: "Wed. Dec 22, 10:00 AM - 4:00 PM",
    location: "📍 Ottawa Art Gallery",
    imageUri: "https://images.pexels.com/photos/221357/pexels-photo-221357.jpeg",
  }
];

export default function HomeScreen() {
  const [value, setValue] = React.useState('newShifts');
  const [refreshing, setRefreshing] = useState(false);
  const [shifts, setShifts] = useState(cardData);

  // Simulated refresh function
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    // Simulate an API call or data refresh
    setTimeout(() => {
      // In a real app, you would fetch new data here
      // For now, we'll just shuffle the existing data to simulate a refresh
      const shuffledShifts = [...shifts].sort(() => 0.5 - Math.random());
      setShifts(shuffledShifts);

      setRefreshing(false);
    }, 1500); // Simulates a 1.5-second loading time
  }, [shifts]);

  return (
      <SafeAreaView style={styles.container}>
        <View className="flex-1 justify-start py-6">
          {/* Fixed Top Section */}
          <View className={"flex flex-row items-start justify-between"}>
            <View className={"mb-4"}>
              <H3 className={"font-extrabold"}>Banquetly</H3>
              <Small className={"text-neutral-500 mt-1"}>Find hospitality shifts in Ottawa</Small>
            </View>
            <ThemeToggle />
          </View>

          {/* Tabs Section */}
          <Tabs
              value={value}
              onValueChange={setValue}
              className="w-full max-w-[600px] mx-auto flex-col gap-1.5"
          >
            <TabsList className="flex-row w-full bg-neutral-200 dark:bg-neutral-800">
              <TabsTrigger value="newShifts" className="flex-1 rounded-md ">
                <Text>Posted Shifts</Text>
              </TabsTrigger>
              <TabsTrigger value="onCall" className="flex-1 rounded-md">
                <Text>On-Call Shifts</Text>
              </TabsTrigger>
            </TabsList>

            {/* Scrollable Content */}
            <ScrollView
                refreshControl={
                  <RefreshControl
                      refreshing={refreshing}
                      onRefresh={onRefresh}
                      colors={['#9Bd35A', '#689F38']} // Android
                      tintColor="#689F38" // iOS
                      title="Pull to refresh" // iOS
                  />
                }
                contentContainerStyle={{ paddingBottom: 16 }}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >
              <TabsContent value="newShifts" className={"mt-2 mb-32"}>
                {shifts.map((job, index) => (
                    <Pressable
                        key={index}
                        onPress={() =>
                            router.push(("/shift-details/1" ))
                        }
                    >
                      <Card
                          className=" border rounded-lg bg-white dark:bg-neutral-800 dark:border-neutral-800 mb-4"
                      >
                        <View className="flex flex-row p-4 gap-4">
                          {/* Image Section */}
                          <Image
                              className="rounded-md"
                              source={{ uri: job.imageUri }}
                              style={{ width: 80, height: 80 }}
                          />
                          {/* Content Section */}
                          <View className="flex-1">
                            {/* Header Section */}
                            <View className="flex flex-row items-center justify-between">
                              <CardTitle className="text-lg font-bold text-gray-900 dark:text-gray-100">
                                {job.title}
                              </CardTitle>
                              <Badge className="px-2 py-1 rounded-full bg-blue-500 dark:bg-blue-600 text-white text-sm">
                                <Text className={"font-bold text-white"}>{job.rate}</Text>
                              </Badge>
                            </View>
                            {/* Description */}
                            <CardDescription className="text-sm text-gray-600 mt-1 dark:text-gray-400">
                              {job.schedule}
                            </CardDescription>
                            {/* Location */}
                            <P className="text-sm text-gray-500 mt-2 flex items-center dark:text-gray-400">
                              {job.location}
                            </P>
                          </View>
                        </View>
                      </Card>
                    </Pressable>
                ))}
              </TabsContent>
              <TabsContent value="onCall">
                <View className="flex flex-col items-center justify-center h-44">
                  <H3>
                    No on-call shifts available
                  </H3>
                  <Text className="text-gray-600 dark:text-gray-400 mt-1">
                    Pull down to refresh or check back later
                  </Text>
                </View>
              </TabsContent>
            </ScrollView>
          </Tabs>
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16, // Padding inside the safe area
  }
});