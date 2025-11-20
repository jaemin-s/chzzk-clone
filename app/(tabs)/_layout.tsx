import { Tabs } from "expo-router";

export default function TabLayout(){

  return (
    <Tabs screenOptions={{ headerShown: true}}>
      <Tabs.Screen name="index" options={{ title:"홈"}}/>
      <Tabs.Screen name="following" options={{ title:"팔로잉"}}/>
      <Tabs.Screen name="clip" options={{ title:"클립"}}/>
      <Tabs.Screen name="explore" options={{ title:"탐색"}}/>
    </Tabs>
  )
}