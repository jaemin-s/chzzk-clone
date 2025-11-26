import { useRouter } from "expo-router";
import { Pressable, View } from "react-native";

export default function ExploreScreen() {
  const router = useRouter()
  return (
    <View style={{flex: 1, justifyContent:"center", alignItems:"center"}}>
      <Pressable onPress={() => router.navigate('/modals/bottom-sheet')}>모달 클릭</Pressable>
      <Pressable onPress={() => router.navigate('/modals/alert')}>얼럿 클릭</Pressable>
      <Pressable onPress={() => router.navigate('/modals/side-bar')}>사이드바 클릭</Pressable>
    </View>
  )
}