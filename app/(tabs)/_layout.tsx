import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="login" options={{ title: "Đăng nhập" }} />
      <Tabs.Screen name="home" options={{ title: "Trang chủ" }} />
    </Tabs>
  );
}
