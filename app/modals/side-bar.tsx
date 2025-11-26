import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function SideBar() {
  const router = useRouter()
  return (
    <View style={{ flex: 1, flexDirection:"row",backgroundColor: 'rgba(0,0,0,0.4)' }}>
      <Pressable style={{ flex: 1 }} onPress={() => router.back() }/>
      <View style={{ height:"100%", width:"50%", backgroundColor: 'white', borderTopLeftRadius: 16, borderTopRightRadius: 16 }}>
        <Text>SideBar</Text>
      </View>
    </View>
  )
}