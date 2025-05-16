import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { RestaurantsItem } from "./horizontal";
export interface RestaurantsProps {
  id: string;
  name: string;
  image: string;
}
export function Restaurants() {
  const [restaurants, setRestaurants] = useState<RestaurantsProps[]>([]);
  useEffect(() => {
    async function getRestaurants() {
      const response = await fetch("http://192.168.1.57:3000/restaurants");
      const data = await response.json();
      setRestaurants(data);
    }
    getRestaurants();
  });
  return (
    <FlatList
      data={restaurants}
      renderItem={({ item }) => <RestaurantsItem item={item} />}
      contentContainerClassName="gap-4 px-3"
      showsHorizontalScrollIndicator={false}
      horizontal={true}
    />
  );
}
