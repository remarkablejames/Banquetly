import React, { useState } from 'react';
import { Text, TouchableOpacity, ScrollView, View as RNView, useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Users, Settings, CreditCard, LogOut, Edit, LucideProps} from 'lucide-react-native';

// User Type Definition
interface User {
    name: string;
    email: string;
    role: string;
    shifts: number;
    rating: number;
}

// Props Type for AccountMenuItem
interface AccountMenuItemProps {
    icon: React.ComponentType<LucideProps>;
    label: string;
    onPress: () => void;
}

// Props Type for AccountSection
interface AccountSectionProps {
    title: string;
    children: React.ReactNode;
}

const AccountPage: React.FC = () => {
    const colorScheme = useColorScheme();
    const isDarkMode = colorScheme === 'dark';

    const [user, setUser] = useState<User>({
        name: 'Alex Johnson',
        email: 'alex.johnson@example.com',
        role: 'Server',
        shifts: 12,
        rating: 4.8
    });

    // Dynamic color palette
    const colors = {
        background: isDarkMode ? 'bg-black' : 'bg-gray-50',
        cardBackground: isDarkMode ? 'bg-neutral-800' : 'bg-white',
        text: {
            primary: isDarkMode ? 'text-gray-100' : 'text-gray-900',
            secondary: isDarkMode ? 'text-gray-400' : 'text-gray-600',
        },
        icon: isDarkMode ? '#9CA3AF' : '#4B5563',
        profileInitials: isDarkMode ? 'bg-blue-700' : 'bg-blue-500',
        statsBackground: isDarkMode ? 'bg-gray-800' : 'bg-white',
        logoutBackground: isDarkMode ? 'bg-red-900/20' : 'bg-red-50',
        logoutText: isDarkMode ? 'text-red-400' : 'text-red-600'
    };

    const AccountSection: React.FC<AccountSectionProps> = ({ title, children }) => (
        <RNView className={`${colors.cardBackground} rounded-lg shadow-none border border-gray-200 mb-4 p-4`}>
            <Text className={`text-lg font-bold ${colors.text.primary} mb-3`}>{title}</Text>
            {children}
        </RNView>
    );

    const AccountMenuItem: React.FC<AccountMenuItemProps> = ({ icon: Icon, label, onPress }) => (
        <TouchableOpacity
            className={`flex-row items-center py-3 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-100'}`}
            onPress={onPress}
        >
            <Icon color={colors.icon} size={18} />
            <Text className={`${colors.text.primary} text-base flex-1 ml-2`}>{label}</Text>
            <Text className={colors.text.secondary}>›</Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView className={`flex-1 ${colors.background}`}>
            <ScrollView className="flex-1 p-4">
                {/* Profile Header */}
                <RNView className="items-center mb-6">
                    <RNView className={`w-24 h-24 ${colors.profileInitials} rounded-full items-center justify-center mb-4`}>
                        <Text className="text-white text-3xl font-bold">
                            {user.name.charAt(0)}
                        </Text>
                    </RNView>
                    <Text className={`text-2xl font-bold ${colors.text.primary}`}>{user.name}</Text>
                    <Text className={`${colors.text.secondary}`}>{user.email}</Text>
                </RNView>

                {/* Profile Stats */}
                <RNView className={`flex-row justify-around ${colors.statsBackground} rounded-lg shadow-none border border-gray-200 py-4 mb-4`}>
                    <RNView className="items-center">
                        <Text className="text-xl font-bold text-blue-600">{user.shifts}</Text>
                        <Text className={colors.text.secondary}>Shifts</Text>
                    </RNView>
                    <RNView className="items-center">
                        <Text className="text-xl font-bold text-green-600">{user.rating}</Text>
                        <Text className={colors.text.secondary}>Rating</Text>
                    </RNView>
                    <RNView className="items-center">
                        <Text className="text-xl font-bold text-purple-600">{user.role}</Text>
                        <Text className={colors.text.secondary}>Role</Text>
                    </RNView>
                </RNView>

                {/* Account Actions */}
                <AccountSection title="Account">
                    <AccountMenuItem
                        icon={Edit}
                        label="Edit Profile"
                        onPress={() => {/* Navigate to edit profile */}}
                    />
                    <AccountMenuItem
                        icon={Users}
                        label="My Details"
                        onPress={() => {/* Navigate to details page */}}
                    />
                    <AccountMenuItem
                        icon={CreditCard}
                        label="Payment Methods"
                        onPress={() => {/* Navigate to payment methods */}}
                    />
                </AccountSection>

                {/* App Settings */}
                <AccountSection title="App Settings">
                    <AccountMenuItem
                        icon={Settings}
                        label="Preferences"
                        onPress={() => {/* Navigate to app preferences */}}
                    />
                </AccountSection>

                {/* Logout */}
                <TouchableOpacity
                    className={`flex-row items-center justify-center ${colors.logoutBackground} p-4 rounded-lg mt-4`}
                    onPress={() => {/* Implement logout logic */}}
                >
                    <LogOut color="#DC2626" size={24} className="mr-2 border" />
                    <Text className={`${colors.logoutText} font-bold`}>Log Out</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

export default AccountPage;