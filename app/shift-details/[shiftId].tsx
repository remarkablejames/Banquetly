import React from 'react';
import {
    View,
    Image,
    ScrollView,
    Pressable,
    Platform,
    Linking
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import {
    Feather,
    MaterialIcons,
    AntDesign,
    Ionicons
} from '@expo/vector-icons';

// UI Components
import { Text } from "~/components/ui/text";
import { H3, P, Small } from "~/components/ui/typography";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent } from "~/components/ui/card";

export default function ShiftDetailsScreen() {
    // Enhanced shift details with more comprehensive information
    const shiftDetails = {
        id: "SHIFT-20231215-001",
        title: "Corporate Event Wait Staff",
        rate: "$22.50/hr",
        schedule: {
            date: "Thu. Dec 16, 2023",
            startTime: "8:00 AM",
            endTime: "4:00 PM",
            totalHours: 8
        },
        location: {
            name: "Infinity Convention Centre",
            address: "123 Convention Way, Ottawa, ON K1P 5N9",
            coordinates: {
                latitude: 45.4215,
                longitude: -75.6972
            }
        },
        imageUri: "https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg",
        description: "We are seeking experienced wait staff for a high-profile corporate technology conference. The event requires professional, attentive staff to provide exceptional service to corporate executives and industry leaders.",
        requirements: [
            "Minimum 2 years of fine dining or high-end catering experience",
            "Ability to stand for extended periods (6-8 hours)",
            "Excellent communication and interpersonal skills",
            "Professional appearance and demeanor",
            "Basic understanding of fine dining service protocols"
        ],
        benefits: [
            "Competitive hourly rate",
            "Potential for future recurring work",
            "Professional networking opportunity",
            "Meal provided during shift"
        ],
        dresscode: {
            type: "Business Professional",
            details: "Black dress pants, white button-up shirt, black dress shoes. Company-provided black apron will be supplied."
        },
        employerDetails: {
            name: "Banquetly Events",
            rating: 4.8,
            totalJobs: 150,
            verificationStatus: "Verified Employer",
            contactEmail: "staffing@banquetlyevents.com",
            contactPhone: "+1 (613) 555-0123"
        },
        applicationDeadline: "2023-12-14T23:59:59Z",
        vacancies: 12,
        skills: ["Customer Service", "Food Service", "Event Staffing", "Hospitality"]
    };

    const handleApply = () => {
        // Implement application logic
        console.log('Apply for shift');
        // Potential navigation or modal for application
    };

    const handleOpenMaps = () => {
        const { latitude, longitude } = shiftDetails.location.coordinates;
        const url = Platform.select({
            ios: `maps:0,0?q=${shiftDetails.location.name}@${latitude},${longitude}`,
            android: `geo:0,0?q=${latitude},${longitude}(${encodeURIComponent(shiftDetails.location.name)})`
        });

        if (url) {
    Linking.openURL(url);
} else {
    console.error('URL is undefined');
}
    };

    const renderSkillBadge = (skill: string) => (
        <Badge
            key={skill}
            className="px-2 py-1 mr-2 mb-2 rounded-full bg-blue-100 dark:bg-blue-900"
        >
            <Text className="text-blue-600 dark:text-blue-200 text-xs">{skill}</Text>
        </Badge>
    );

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1 }}
        >
            <View>
                {/* Shift Image */}
                <View className="mb-4 relative">
                    <Image
                        source={{ uri: shiftDetails.imageUri }}
                        className="w-full h-56"
                        style={{ resizeMode: 'cover' }}
                    />
                    <Badge className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-black/70">
                        <Text className="text-white text-xs">
                            {shiftDetails.vacancies} Vacancies
                        </Text>
                    </Badge>
                </View>

                {/* Shift Basic Info */}
                <View className="px-4">
                    <View className="flex-row justify-between items-center mb-4">
                        <H3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 flex-1 pr-4">
                            {shiftDetails.title}
                        </H3>
                        <Badge className="px-3 py-1 rounded-full bg-green-500 dark:bg-green-600">
                            <Text className="text-white font-bold">{shiftDetails.rate}</Text>
                        </Badge>
                    </View>

                    {/* Skills */}
                    <View className="flex-row flex-wrap mb-4">
                        {shiftDetails.skills.map(renderSkillBadge)}
                    </View>

                    {/* Shift Details Cards */}
                    <View className="space-y-4 gap-3 mb-4">
                        {/* Schedule Card */}
                        <Card className="border rounded-lg bg-neutral-100 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
                            <CardContent className="flex-row items-center p-4 space-x-3">
                                <AntDesign name="clockcircleo" size={18} className="text-blue-500 mr-2" />
                                <View>
                                    <Text className="font-semibold text-gray-800 dark:text-gray-200">
                                        {shiftDetails.schedule.date}
                                    </Text>
                                    <Small className="text-gray-600 dark:text-gray-400">
                                        {shiftDetails.schedule.startTime} - {shiftDetails.schedule.endTime}
                                        {` (${shiftDetails.schedule.totalHours} hrs)`}
                                    </Small>
                                </View>
                            </CardContent>
                        </Card>

                        {/* Location Card */}
                        <Pressable onPress={handleOpenMaps}>
                            <Card className="border rounded-lg bg-neutral-100 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
                                <CardContent className="flex-row items-center p-4 space-x-3">
                                    <Feather name="map-pin" size={20} className="text-blue-500 mr-2" />
                                    <View className="flex-1">
                                        <Text className="font-semibold text-gray-800 dark:text-gray-200">
                                            {shiftDetails.location.name}
                                        </Text>
                                        <Small className="text-gray-600 dark:text-gray-400 mt-1">
                                            {shiftDetails.location.address}
                                        </Small>
                                    </View>

                                </CardContent>
                            </Card>
                        </Pressable>
                    </View>

                    {/* Description Section */}
                    <View className="mb-4">
                        <H3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
                            Job Description
                        </H3>
                        <P className="text-gray-700 dark:text-gray-300">
                            {shiftDetails.description}
                        </P>
                    </View>

                    {/* Dresscode Section */}
                    <View className="mb-4">
                        <H3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
                            Dress Code
                        </H3>
                        <Card className="border rounded-lg bg-neutral-100 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
                            <CardContent className="p-4">
                                <View className="flex-row items-center mb-2">
                                    <MaterialIcons name="business" size={20} className="text-purple-500 mr-3" />
                                    <Text className="font-semibold text-gray-800 dark:text-gray-200">
                                        {shiftDetails.dresscode.type}
                                    </Text>
                                </View>
                                <Text className="text-gray-600 dark:text-gray-400">
                                    {shiftDetails.dresscode.details}
                                </Text>
                            </CardContent>
                        </Card>
                    </View>

                    {/* Requirements Section */}
                    <View className="mb-4">
                        <H3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
                            Requirements
                        </H3>
                        <View className="space-y-2 gap-1">
                            {shiftDetails.requirements.map((req, index) => (
                                <View key={index} className="flex-row items-start space-x-2">
                                    <View className="w-2 h-2 rounded-full mr-2 bg-blue-500 mt-2" />
                                    <Text className="flex-1 text-gray-700 dark:text-gray-300">
                                        {req}
                                    </Text>
                                </View>
                            ))}
                        </View>
                    </View>

                    {/* Benefits Section */}
                    <View className="mb-4">
                        <H3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
                            Benefits
                        </H3>
                        <View className="space-y-2 gap-1">
                            {shiftDetails.benefits.map((benefit, index) => (
                                <View key={index} className="flex-row items-start space-x-2">
                                    <View className="w-2 h-2 mr-2 rounded-full bg-green-500 mt-2" />
                                    <Text className="flex-1 text-gray-700 dark:text-gray-300">
                                        {benefit}
                                    </Text>
                                </View>
                            ))}
                        </View>
                    </View>

                    {/* Employer Details */}
                    <View className="mb-4">
                        <H3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
                            Employer
                        </H3>
                        <Card className="border rounded-lg bg-neutral-100 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
                            <CardContent className="flex-row items-center justify-between p-4">
                                <View className="flex-row items-center space-x-3 flex-1">
                                    <MaterialIcons name="business" size={24} className="text-purple-500 mr-2" />
                                    <View className="flex-1">
                                        <View className="flex-row items-center">
                                            <Text className="font-semibold text-gray-800 dark:text-gray-200 mr-2">
                                                {shiftDetails.employerDetails.name}
                                            </Text>
                                        </View>
                                        <Small className="text-gray-600 dark:text-gray-400">
                                            {shiftDetails.employerDetails.verificationStatus}
                                        </Small>
                                    </View>
                                </View>
                                <View className="flex-row items-center space-x-1">
                                    <Text className="text-yellow-500 font-bold">★</Text>
                                    <Text className="font-semibold text-gray-800 dark:text-gray-200">
                                        {shiftDetails.employerDetails.rating}
                                    </Text>
                                </View>
                            </CardContent>
                        </Card>
                    </View>

                    {/* Apply Button */}
                    <Button
                        className="w-full bg-blue-600 dark:bg-blue-700 rounded-lg py-4 mb-4"
                        onPress={handleApply}
                    >
                        <Text className="text-white font-bold text-base">Apply for Shift</Text>
                    </Button>

                    {/* Additional Info */}
                    <View className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-4">
                        <View className="flex-row justify-between mb-2">
                            <Text className="text-gray-600 dark:text-gray-400">Shift ID</Text>
                            <Text className="font-semibold text-gray-800 dark:text-gray-200">
                                {shiftDetails.id}
                            </Text>
                        </View>
                        <View className="flex-row justify-between">
                            <Text className="text-gray-600 dark:text-gray-400">Application Deadline</Text>
                            <Text className="font-semibold text-red-600 dark:text-red-400">
                                Dec 14, 2023
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}