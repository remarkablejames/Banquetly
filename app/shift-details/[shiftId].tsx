import React, { useState } from 'react';
import {
    View,
    Image,
    ScrollView,
    Pressable,
    Platform
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    MaterialIcons,
    AntDesign, EvilIcons
} from '@expo/vector-icons';

// UI Components
import { Text } from "~/components/ui/text";
import { H3, P, Small } from "~/components/ui/typography";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent } from "~/components/ui/card";

export default function ShiftDetailsScreen() {
    // Mock shift details (in a real app, this would come from navigation params or state)
    const shiftDetails = {
        title: "Wait Staff",
        rate: "$20.0/hr",
        schedule: "Thu. Dec 16, 8:00 AM - 4:00 PM",
        location: "Infinity Convention Centre",
        address: "123 Convention Way, Ottawa, ON K1P 5N9",
        imageUri: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
        description: "We are seeking experienced wait staff for a high-profile corporate event. Responsible for providing excellent customer service, setting up dining areas, and ensuring guest satisfaction.",
        requirements: [
            "Previous restaurant or catering experience",
            "Ability to stand for extended periods",
            "Professional and friendly demeanor",
            "Basic math and communication skills"
        ],
        employerDetails: {
            name: "Banquetly Events",
            rating: 4.8,
            totalJobs: 150
        }
    };

    return (
        // <SafeAreaView
        //     style={{
        //         flex: 1,
        //         backgroundColor: 'white',
        //         paddingTop: Platform.OS === 'ios' ? 0 : 0 // Ensure no extra space
        //     }}
        // >
            <ScrollView
                style={{ flex: 1 }}
                contentContainerStyle={{
                    paddingBottom: 32,
                    paddingTop: 0, // Ensure no top padding
                }}
                showsVerticalScrollIndicator={false}
            >
                {/* Shift Image */}
                <View className="mb-4">
                    <Image
                        source={{ uri: shiftDetails.imageUri }}
                        className="w-full h-48"
                        style={{ resizeMode: 'cover' }}
                    />
                </View>

                {/* Shift Basic Info */}
                <View className="px-4">
                    <View className="flex-row justify-between items-center mb-4">
                        <H3 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100">
                            {shiftDetails.title}
                        </H3>
                        <Badge className="px-3 py-1 rounded-full bg-blue-500 dark:bg-blue-600">
                            <Text className="text-white font-bold">{shiftDetails.rate}</Text>
                        </Badge>
                    </View>

                    {/* Shift Details Cards */}
                    <View className="flex flex-col gap-2 space-y-4 mb-4">
                        {/* Schedule Card */}
                        <Card className="border rounded-lg bg-neutral-100 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
                            <CardContent className="flex-row items-center p-4 space-x-3">
                                <AntDesign name="clockcircleo" size={16} color="black" className={"mr-2"}/>
                                <View>
                                    <Text className="font-semibold text-gray-800 dark:text-gray-200">
                                        {shiftDetails.schedule}
                                    </Text>
                                </View>
                            </CardContent>
                        </Card>

                        {/* Location Card */}
                        <Card className="border rounded-lg bg-neutral-100 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
                            <CardContent className="flex-row items-center p-4 space-x-3">
                                <EvilIcons name="location" size={24} color="black" />
                                <View className="flex-1">
                                    <Text className="font-semibold text-gray-800 dark:text-gray-200">
                                        {shiftDetails.location}
                                    </Text>
                                    <Small className="text-gray-600 dark:text-gray-400 mt-1">
                                        {shiftDetails.address}
                                    </Small>
                                </View>
                            </CardContent>
                        </Card>
                    </View>

                    {/* Description Section */}
                    <View className="mb-4">
                        <H3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
                            Shift Description
                        </H3>
                        <P className="text-gray-700 dark:text-gray-300">
                            {shiftDetails.description}
                        </P>
                    </View>

                    {/* Requirements Section */}
                    <View className="mb-4">
                        <H3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
                            Requirements
                        </H3>
                        <View className="space-y-2">
                            {shiftDetails.requirements.map((req, index) => (
                                <View key={index} className="flex-row items-center space-x-2">
                                    <View className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                                    <Text className="text-gray-700 dark:text-gray-300">
                                        {req}
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
                                <View className="flex-row items-center space-x-3">
                                    <MaterialIcons name="people-outline" className="mr-2 text-purple-500" size={30} />
                                    <View>
                                        <Text className="font-semibold text-gray-800 dark:text-gray-200">
                                            {shiftDetails.employerDetails.name}
                                        </Text>
                                        <Small className="text-gray-600 dark:text-gray-400">
                                            {shiftDetails.employerDetails.totalJobs} total jobs
                                        </Small>
                                    </View>
                                </View>
                                {/*<View className="flex-row items-center space-x-1">*/}
                                {/*    <Text className="text-yellow-500 font-bold">★</Text>*/}
                                {/*    <Text className="font-semibold text-gray-800 dark:text-gray-200">*/}
                                {/*        {shiftDetails.employerDetails.rating}*/}
                                {/*    </Text>*/}
                                {/*</View>*/}
                            </CardContent>
                        </Card>
                    </View>

                    {/* Apply Button */}
                    <Button
                        className="w-full bg-blue-500 dark:bg-blue-600 rounded-lg py-4"
                        onPress={() => {
                            // Implement application logic
                            console.log('Apply for shift');
                        }}
                    >
                        <Text className="text-white font-bold text-base">Apply for Shift</Text>
                    </Button>
                </View>
            </ScrollView>
        // </SafeAreaView>
    );
}
// import React, { useState } from 'react';
// import {
//     View,
//     Image,
//     ScrollView,
//     Pressable,
//     Platform
// } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { router } from 'expo-router';
//
// // UI Components
// import { Text } from "~/components/ui/text";
// import { H3, P, Small } from "~/components/ui/typography";
// import { Button } from "~/components/ui/button";
// import { Badge } from "~/components/ui/badge";
// import { Card, CardContent } from "~/components/ui/card";
//
// // Icons (you'll need to import or create these)
// import ChevronLeftIcon from '~/components/icons/ChevronLeftIcon';
// import ClockIcon from '~/components/icons/ClockIcon';
// import MapPinIcon from '~/components/icons/MapPinIcon';
// import DollarSignIcon from '~/components/icons/DollarSignIcon';
// import UsersIcon from '~/components/icons/UsersIcon';
//
// export default function ShiftDetailsScreen() {
//     // Mock shift details (in a real app, this would come from navigation params or state)
//     const shiftDetails = {
//         title: "Wait Staff",
//         rate: "$20.0/hr",
//         schedule: "Thu. Dec 16, 8:00 AM - 4:00 PM",
//         location: "Infinity Convention Centre",
//         address: "123 Convention Way, Ottawa, ON K1P 5N9",
//         imageUri: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
//         description: "We are seeking experienced wait staff for a high-profile corporate event. Responsible for providing excellent customer service, setting up dining areas, and ensuring guest satisfaction.",
//         requirements: [
//             "Previous restaurant or catering experience",
//             "Ability to stand for extended periods",
//             "Professional and friendly demeanor",
//             "Basic math and communication skills"
//         ],
//         employerDetails: {
//             name: "Banquetly Events",
//             rating: 4.8,
//             totalJobs: 150
//         }
//     };
//
//     return (
//         <SafeAreaView className="flex-1 bg-white dark:bg-neutral-900">
//             {/* Header with Back Button */}
//             <View className="flex-row items-center justify-between px-4 py-3">
//                 <Pressable
//                     onPress={() => router.back()}
//                     className="p-2 -ml-2 rounded-full"
//                 >
//                     <ChevronLeftIcon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
//                 </Pressable>
//                 <H3 className="text-lg font-bold text-gray-900 dark:text-gray-100">Shift Details</H3>
//                 <View className="w-6 h-6" /> {/* Spacer to center the title */}
//             </View>
//
//             <ScrollView
//                 className="flex-1"
//                 contentContainerStyle={{ paddingBottom: 32 }}
//                 showsVerticalScrollIndicator={false}
//             >
//                 {/* Shift Image */}
//                 <View className="mb-4">
//                     <Image
//                         source={{ uri: shiftDetails.imageUri }}
//                         className="w-full h-48"
//                         style={{ resizeMode: 'cover' }}
//                     />
//                 </View>
//
//                 {/* Shift Basic Info */}
//                 <View className="px-4">
//                     <View className="flex-row justify-between items-center mb-4">
//                         <H3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
//                             {shiftDetails.title}
//                         </H3>
//                         <Badge className="px-3 py-1 rounded-full bg-green-500 dark:bg-green-600">
//                             <Text className="text-white font-bold">{shiftDetails.rate}</Text>
//                         </Badge>
//                     </View>
//
//                     {/* Shift Details Cards */}
//                     <View className="space-y-4 mb-4">
//                         {/* Schedule Card */}
//                         <Card className="border rounded-lg bg-neutral-100 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
//                             <CardContent className="flex-row items-center p-4 space-x-3">
//                                 <ClockIcon className="w-6 h-6 text-blue-500" />
//                                 <View>
//                                     <Text className="font-semibold text-gray-800 dark:text-gray-200">
//                                         {shiftDetails.schedule}
//                                     </Text>
//                                 </View>
//                             </CardContent>
//                         </Card>
//
//                         {/* Location Card */}
//                         <Card className="border rounded-lg bg-neutral-100 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
//                             <CardContent className="flex-row items-center p-4 space-x-3">
//                                 <MapPinIcon className="w-6 h-6 text-green-500" />
//                                 <View className="flex-1">
//                                     <Text className="font-semibold text-gray-800 dark:text-gray-200">
//                                         {shiftDetails.location}
//                                     </Text>
//                                     <Small className="text-gray-600 dark:text-gray-400 mt-1">
//                                         {shiftDetails.address}
//                                     </Small>
//                                 </View>
//                             </CardContent>
//                         </Card>
//                     </View>
//
//                     {/* Description Section */}
//                     <View className="mb-4">
//                         <H3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
//                             Job Description
//                         </H3>
//                         <P className="text-gray-700 dark:text-gray-300">
//                             {shiftDetails.description}
//                         </P>
//                     </View>
//
//                     {/* Requirements Section */}
//                     <View className="mb-4">
//                         <H3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
//                             Requirements
//                         </H3>
//                         <View className="space-y-2">
//                             {shiftDetails.requirements.map((req, index) => (
//                                 <View key={index} className="flex-row items-center space-x-2">
//                                     <View className="w-2 h-2 bg-blue-500 rounded-full" />
//                                     <Text className="text-gray-700 dark:text-gray-300">
//                                         {req}
//                                     </Text>
//                                 </View>
//                             ))}
//                         </View>
//                     </View>
//
//                     {/* Employer Details */}
//                     <View className="mb-4">
//                         <H3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
//                             Employer
//                         </H3>
//                         <Card className="border rounded-lg bg-neutral-100 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
//                             <CardContent className="flex-row items-center justify-between p-4">
//                                 <View className="flex-row items-center space-x-3">
//                                     <UsersIcon className="w-6 h-6 text-purple-500" />
//                                     <View>
//                                         <Text className="font-semibold text-gray-800 dark:text-gray-200">
//                                             {shiftDetails.employerDetails.name}
//                                         </Text>
//                                         <Small className="text-gray-600 dark:text-gray-400">
//                                             {shiftDetails.employerDetails.totalJobs} total jobs
//                                         </Small>
//                                     </View>
//                                 </View>
//                                 <View className="flex-row items-center space-x-1">
//                                     <Text className="text-yellow-500 font-bold">★</Text>
//                                     <Text className="font-semibold text-gray-800 dark:text-gray-200">
//                                         {shiftDetails.employerDetails.rating}
//                                     </Text>
//                                 </View>
//                             </CardContent>
//                         </Card>
//                     </View>
//
//                     {/* Apply Button */}
//                     <Button
//                         className="w-full bg-blue-500 dark:bg-blue-600 rounded-lg py-4"
//                         onPress={() => {
//                             // Implement application logic
//                             console.log('Apply for shift');
//                         }}
//                     >
//                         <Text className="text-white font-bold text-base">Apply for Shift</Text>
//                     </Button>
//                 </View>
//             </ScrollView>
//         </SafeAreaView>
//     );
// }