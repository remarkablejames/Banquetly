import {Image, StyleSheet, Platform, View} from 'react-native';

import { HelloWave } from '~/components/HelloWave';
import ParallaxScrollView from '~/components/ParallaxScrollView';
import { ThemedText } from '~/components/ThemedText';
import { ThemedView } from '~/components/ThemedView';
import {Tabs, TabsContent, TabsList, TabsTrigger} from "~/components/ui/tabs";
import {Text} from "~/components/ui/text";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "~/components/ui/card";
import {Label} from "~/components/ui/label";
import {Input} from "~/components/ui/input";
import {Button} from "~/components/ui/button";
import {SafeAreaView} from "react-native-safe-area-context";
import React from "react";
import {H3, Small} from "~/components/ui/typography";

export default function HomeScreen() {
  const [value, setValue] = React.useState('account');
  return (
      <SafeAreaView style={styles.container}>
        {/*<Text className={"text-3xl font-extrabold text-start"}>Banquetly</Text>*/}
        <View className='flex-1 justify-start py-6'>
          <View className={"mb-4"}>
          <H3>Banquetly</H3>
          <Small className={"text-neutral-500 mt-1"}>Find hospitality shifts in Ottawa</Small>
          </View>
          <Tabs
              value={value}
              onValueChange={setValue}
              className='w-full max-w-[600px] mx-auto flex-col gap-1.5'
          >
            <TabsList className='flex-row w-full'>
              <TabsTrigger value='account' className='flex-1 rounded-md'>
                <Text>Posted Shifts</Text>
              </TabsTrigger>
              <TabsTrigger value='password' className='flex-1 rounded-md'>
                <Text>On-Call Shifts</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value='account'>
              <Card>
                <CardHeader>
                  <CardTitle>Account</CardTitle>
                  <CardDescription>
                    Make changes to your account here. Click save when you're done.
                  </CardDescription>
                </CardHeader>
                <CardContent className='gap-4 native:gap-2'>
                  <View className='gap-1'>
                    <Label nativeID='name'>Name</Label>
                    <Input aria-aria-labelledby='name' defaultValue='Pedro Duarte' />
                  </View>
                  <View className='gap-1'>
                    <Label nativeID='username'>Username</Label>
                    <Input id='username' defaultValue='@peduarte' />
                  </View>
                </CardContent>
                <CardFooter>
                  <Button>
                    <Text>Save changes</Text>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value='password'>
              <Card>
                <CardHeader>
                  <CardTitle>Password</CardTitle>
                  <CardDescription>
                    Change your password here. After saving, you'll be logged out.
                  </CardDescription>
                </CardHeader>
                <CardContent className='gap-4 native:gap-2'>
                  <View className='gap-1'>
                    <Label nativeID='current'>Current password</Label>
                    <Input placeholder='********' aria-labelledby='current' secureTextEntry />
                  </View>
                  <View className='gap-1'>
                    <Label nativeID='new'>New password</Label>
                    <Input placeholder='********' aria-labelledby='new' secureTextEntry />
                  </View>
                </CardContent>
                <CardFooter>
                  <Button>
                    <Text>Save password</Text>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#f0f0f0', // Optional background color
    padding: 16, // Padding inside the safe area
  }
});