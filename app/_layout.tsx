import { Stack } from "expo-router";

export default function RootLayout() {
  
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false}}/>
      <Stack.Screen name="modals/alert" 
        options={{
          presentation: 'transparentModal',
          headerShown: false,
        }}/>
      <Stack.Screen name="modals/bottom-sheet" 
        options={{
          presentation: 'transparentModal',
          headerShown: false,
        }}/>
      <Stack.Screen name="modals/side-bar" 
        options={{
          presentation: 'transparentModal',
          headerShown: false,
        }}/>
    </Stack>
    );
}
