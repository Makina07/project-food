import { useEffect, useState } from "react";
import { View } from "react-native";
import { RestaurantsItem } from "./item";

export interface RestaurantsProps {
  id: string;
  name: string;
  image: string;
}
export function RestaurantsVerticalList() {
  const [restaurants, setRestautants] = useState<RestaurantsProps[]>([]);
  useEffect(() => {
    async function getRestaurants() {
      const response = await fetch("http://192.168.1.57:3000/restaurants");
      const data = await response.json();
      setRestautants(data);
    }
    getRestaurants();
  });
  return (
    <View className="px-4 flex-1 w-full h-full mb-11 gap-4">
      {restaurants.map((item) => (
        <RestaurantsItem item={item} key={item.id} />
      ))}
    </View>
  );
}
