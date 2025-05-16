import Constants from "expo-constants";
import { ScrollView, View } from "react-native";
import { Header } from "../components/header";
const statusbarHeight = Constants.statusBarHeight;
export default function Index() {
  return (
    <ScrollView
      style={{ flex: 1 }}
      className="bg-slate-200"
      showsVerticalScrollIndicator={false}
    >
      <View
        className="w-full mt-10 px-4"
        style={{ marginTop: statusbarHeight + 8 }}
      >
        <Header />
      </View>
    </ScrollView>
  );
}
