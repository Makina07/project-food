import Constants from "expo-constants";
import { ScrollView, View } from "react-native";
import { Banner } from "../components/banner";
import { Header } from "../components/header";
import { Search } from "../components/search";
import { Section } from "../components/section";
import { TrendingFoods } from "../components/trending";
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
        <Banner />
        <Search />
      </View>
      <Section
        name="Comidas em alta"
        label="veja mais"
        action={() => {
          console.log("CLICOU NO BOTAO VEJA MAIS1");
        }}
        size="text-2xl"
      />
      <TrendingFoods />
    </ScrollView>
  );
}
