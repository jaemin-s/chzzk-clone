import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Alert() {
  const router = useRouter()
  return (
    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.4)' }}>
      <Pressable style={{ flex: 1 }} onPress={() => router.back() }/>
      <View style={{ height: 300, backgroundColor: 'white', borderRadius: 16 }}>
        <Text>Alert</Text>
      </View>
      <Pressable style={{ flex: 1 }} onPress={() => router.back() }/>
    </View>
  )
}