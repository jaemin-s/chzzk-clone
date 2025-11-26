import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function BottomSheet() {
  const router = useRouter()
  return (
    <View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.4)' }}>
      <Pressable style={{ flex: 1 }} onPress={() => router.back() }/>
      <View style={{ height: 300, backgroundColor: 'white', borderTopLeftRadius: 16, borderTopRightRadius: 16 }}>
        <Text>바텀시트</Text>
      </View>
    </View>
  )
}