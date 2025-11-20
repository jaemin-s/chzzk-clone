import { Link, Tabs } from "expo-router";
import { View } from "react-native";

export default function TabLayout(){

  return (
    <Tabs screenOptions={{ headerRight: () => (
      <View>
        <Link style={{ paddingRight:16 }} href={"/setting"}>설정</Link>
      </View>
  ),}}>
      <Tabs.Screen name="index" options={{ title:"홈"}}/>
      <Tabs.Screen name="following" options={{ title:"팔로잉"}}/>
      <Tabs.Screen name="clip" options={{ title:"클립"}}/>
      <Tabs.Screen name="explore" options={{ title:"탐색"}}/>
    </Tabs>
  )
}