import React, { useState } from "react";
import {
    Image,
    StyleSheet,
    View,
    Pressable,
    RefreshControl
} from "react-native";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Text } from "~/components/ui/text";
import { Card, CardDescription } from "~/components/ui/card";
import { SafeAreaView } from "react-native-safe-area-context";
import { H3, P, Small } from "~/components/ui/typography";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { ScrollView } from "react-native";
import { router } from "expo-router";
import {Ionicons} from "@expo/vector-icons";

// Define interfaces for shift types
interface Shift {
    id: string;
    title: string;
    rate: string;
    schedule: string;
    location: string;
    imageUri: string;
    startTime?: string;
    endTime?: string;
    clockedIn?: string;
    clockedOut?: string;
}

// Mock data with more detailed shift information
const mockShifts: {
    upcoming: Shift[];
    onCall: Shift[];
    past: Shift[];
} = {
    upcoming: [
        {
            id: '1',
            title: "Wait Staff",
            rate: "$20.0/hr",
            schedule: "Thu. Dec 16, 8:00 AM - 4:00 PM",
            location: "📍 Infinity Convention Centre",
            imageUri: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
        },
        {
            id: '2',
            title: "Bartender",
            rate: "$25.0/hr",
            schedule: "Fri. Dec 17, 5:00 PM - 11:00 PM",
            location: "📍 Ottawa Conference Center",
            imageUri: "https://images.pexels.com/photos/593321/pexels-photo-593321.jpeg",
        }
    ],
    onCall: [
        {
            id: '3',
            title: "Event Security",
            rate: "$21.0/hr",
            schedule: "Tue. Dec 21, 4:00 PM - 10:00 PM",
            location: "📍 Shaw Centre",
            imageUri: "https://images.pexels.com/photos/221357/pexels-photo-221357.jpeg",
        }
    ],
    past: [
        {
            id: '4',
            title: "Chef Assistant",
            rate: "$18.5/hr",
            schedule: "Sat. Dec 18, 9:00 AM - 3:00 PM",
            location: "📍 The Westin Ottawa",
            imageUri: "https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg",
            startTime: "2023-12-18T09:05:23",
            endTime: "2023-12-18T15:02:45",
            clockedIn: "2023-12-18T09:05:23",
            clockedOut: "2023-12-18T15:02:45"
        }
    ]
};

export default function ShiftsScreen() {
    const [value, setValue] = useState('upcoming');
    const [refreshing, setRefreshing] = useState(false);
    const [shifts, setShifts] = useState(mockShifts);

    // Simulated refresh function
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);

        // Simulate an API call or data refresh
        setTimeout(() => {
            // In a real app, you would fetch new data here
            // For now, we'll just reset to mock data
            setShifts(mockShifts);
            setRefreshing(false);
        }, 1500); // Simulates a 1.5-second loading time
    }, []);

    // Render upcoming shifts with clock-in button
    const renderUpcomingShifts = () => (
        <>
            {shifts.upcoming.map((job) => (
                <Pressable
                    key={job.id}
                    onPress={() => router.push(`/shift-details/${job.id}`)}
                >
                    <Card className="border rounded-lg bg-white dark:bg-neutral-800 dark:border-neutral-800 mb-4">
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
                                    <Text className="text-lg font-bold text-gray-900 dark:text-gray-100">
                                        {job.title}
                                    </Text>
                                    <Badge className="px-2 py-1 rounded-full bg-blue-500 dark:bg-blue-600 text-white text-sm">
                                        <Text className="font-bold text-white">{job.rate}</Text>
                                    </Badge>
                                </View>
                                {/* Description */}
                                <Text className="text-sm text-gray-600 mt-1 dark:text-gray-400">
                                    {job.schedule}
                                </Text>
                                {/* Location */}
                                <View className="mt-2">
                                    <Text className="text-sm text-gray-500 flex items-center dark:text-gray-400">
                                        {job.location}
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View className={"w-full flex items-center justify-between px-6 mb-4"}>
                        <Button
                            className={`w-full max-w-sm h-14 flex flex-row gap-2`}
                            variant="default"
                            size="sm"
                            onPress={() => {
                                // TODO: Implement QR code scanner navigation
                                console.log('Navigate to QR Scanner');
                            }}
                        >
                            <Ionicons name="qr-code" size={16} color="white" />
                            <Text className="text-white dark:text-black font-bold">Clock In Arrival</Text>
                        </Button>
                        </View>
                    </Card>
                </Pressable>
            ))}
        </>
    );

    // Render on-call shifts
    const renderOnCallShifts = () => (
        shifts.onCall.length > 0 ? (
            <>
                {shifts.onCall.map((job) => (
                    <Pressable
                        key={job.id}
                        onPress={() => router.push(`/shift-details/${job.id}`)}
                    >
                        <Card className="border rounded-lg bg-white dark:bg-neutral-800 dark:border-neutral-800 mb-4">
                            <View className="flex flex-row p-4 gap-4">
                                <Image
                                    className="rounded-md"
                                    source={{ uri: job.imageUri }}
                                    style={{ width: 80, height: 80 }}
                                />
                                <View className="flex-1">
                                    <View className="flex flex-row items-center justify-between">
                                        <Text className="text-lg font-bold text-gray-900 dark:text-gray-100">
                                            {job.title}
                                        </Text>
                                        <Badge className="px-2 py-1 rounded-full bg-yellow-500 dark:bg-yellow-600 text-white text-sm">
                                            <Text className="font-bold text-white">On Call</Text>
                                        </Badge>
                                    </View>
                                    <Text className="text-sm text-gray-600 mt-1 dark:text-gray-400">
                                        {job.schedule}
                                    </Text>
                                    <Text className="text-sm text-gray-500 mt-2 dark:text-gray-400">
                                        {job.location}
                                    </Text>
                                </View>
                            </View>
                        </Card>
                    </Pressable>
                ))}
            </>
        ) : (
            <View className="flex flex-col items-center justify-center h-44">
                <H3>No on-call shifts available</H3>
                <Text className="text-gray-600 dark:text-gray-400 mt-1">
                    Pull down to refresh or check back later
                </Text>
            </View>
        )
    );

    // Render past shifts
    const renderPastShifts = () => (
        shifts.past.length > 0 ? (
            <>
                {shifts.past.map((job) => (
                    <Pressable
                        key={job.id}
                        onPress={() => router.push(`/shift-details/${job.id}`)}
                    >
                        <Card className="border rounded-lg bg-white dark:bg-neutral-800 dark:border-neutral-800 mb-4">
                            <View className="flex flex-row p-4 gap-4">
                                <Image
                                    className="rounded-md"
                                    source={{ uri: job.imageUri }}
                                    style={{ width: 80, height: 80 }}
                                />
                                <View className="flex-1">
                                    <View className="flex flex-row items-center justify-between">
                                        <Text className="text-lg font-bold text-gray-900 dark:text-gray-100">
                                            {job.title}
                                        </Text>
                                        <Badge className="px-2 py-1 rounded-full bg-green-500 dark:bg-green-600 text-white text-sm">
                                            <Text className="font-bold text-white">{job.rate}</Text>
                                        </Badge>
                                    </View>
                                    <View className="mt-2">
                                        <Text className="text-sm text-gray-600 dark:text-gray-400">
                                             {job.schedule}
                                        </Text>
                                    </View>
                                    <Text className="text-sm text-gray-500 mt-2 dark:text-gray-400">
                                        {job.location}
                                    </Text>
                                </View>
                            </View>
                            <View className="flex flex-row justify-between mt-1 px-4 mb-4">
                                <Text className="text-sm text-gray-500 dark:text-gray-400">
                                   Clocked In: {job.clockedIn ? new Date(job.clockedIn).toLocaleTimeString() : 'N/A'}
                                </Text>
                                <Text className="text-sm text-gray-500 dark:text-gray-400">
                                    Clocked Out: {job.clockedOut ? new Date(job.clockedOut).toLocaleTimeString() : 'N/A'}
                                </Text>
                            </View>
                        </Card>
                    </Pressable>
                ))}
            </>
        ) : (
            <View className="flex flex-col items-center justify-center h-44">
                <H3>No past shifts</H3>
                <Text className="text-gray-600 dark:text-gray-400 mt-1">
                    Your completed shifts will appear here
                </Text>
            </View>
        )
    );

    return (
        <SafeAreaView style={styles.container}>
            <View className="flex-1 justify-start py-6">
                {/* Fixed Top Section */}
                <View className="flex flex-row items-start justify-between">
                    <View className="mb-4">
                        <H3 className="font-extrabold">My Shifts</H3>
                        <Small className="text-neutral-500 mt-1">
                            Hospitality shifts in Ottawa
                        </Small>
                    </View>
                </View>

                {/* Tabs Section */}
                <Tabs
                    value={value}
                    onValueChange={setValue}
                    className="w-full max-w-[600px] mx-auto flex-col gap-1.5"
                >
                    <TabsList className="flex-row w-full bg-neutral-200 dark:bg-neutral-800">
                        <TabsTrigger value="upcoming" className="flex-1 rounded-md">
                            <Text>Upcoming</Text>
                        </TabsTrigger>
                        <TabsTrigger value="onCall" className="flex-1 rounded-md">
                            <Text>On-Call</Text>
                        </TabsTrigger>
                        <TabsTrigger value="past" className="flex-1 rounded-md">
                            <Text>Past</Text>
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
                        <TabsContent value="upcoming" className="mt-2 mb-32">
                            {renderUpcomingShifts()}
                        </TabsContent>
                        <TabsContent value="onCall" className="mt-2 mb-32">
                            {renderOnCallShifts()}
                        </TabsContent>
                        <TabsContent value="past" className="mt-2 mb-32">
                            {renderPastShifts()}
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