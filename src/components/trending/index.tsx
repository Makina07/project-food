import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { CardHorizontalFood } from "./food/index";
export interface FoodProps {
  id: string;
  name: string;
  price: number;
  time: string;
  delivery: number;
  rating: number;
  image: string;
  restaurantId: string;
}

export function TrendingFoods() {
  const [foods, setFoods] = useState<FoodProps[]>([]);

  useEffect(() => {
    async function getFoods() {
      const response = await fetch("http://192.168.1.57:3000/foods");
      const data = await response.json();
      setFoods(data);
    }
    getFoods();
  }, []);
  return (
    <View>
      <FlatList
        data={foods}
        renderItem={({ item }) => <CardHorizontalFood food={item} />}
        horizontal={true}
        contentContainerClassName="gap-4 px-3"
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
