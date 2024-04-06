import { Restaurant } from "@/types";
import { useEffect, useState } from "react";
import HotelCard from "./HotelCard";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Link } from "react-router-dom";


const ShowTopRestaurants = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    const fetchTopRestaurants = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/restaurant`);
        const data = await response.json();
        setRestaurants(data);
        console.log(data)
      } catch (error) {
        console.error(error);
      }
    };

    fetchTopRestaurants();
  }, []);
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="text-4xl">Top Restaurants</CardTitle>
          <CardDescription>Explore our Top Restaurants</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {restaurants.map((restaurant) => (
              <Link to={`${import.meta.env.VITE_AUTH0_CALLBACK_URL}/detail/${restaurant._id}`}>
              <HotelCard
                key={restaurant._id}
                name={restaurant.restaurantName}
                image={restaurant.imageUrl}
              />
              </Link>
              
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ShowTopRestaurants;
