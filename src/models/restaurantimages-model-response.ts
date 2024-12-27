import { RestaurantImages } from "@prisma/client";

export interface createRestaurantImage{
    image: string;
    description: string;
}

export interface requestRestaurantImage{
    image: string;
    description: string;
}

export interface responseRestaurantImage{
    id: number;
    image: string;
    description: string;
    RestaurantsID: number;
}

export function toRestaurantImageResponse(restaurantImages: RestaurantImages){
    return {
        id: restaurantImages.id,
        image: restaurantImages.image,
        description: restaurantImages.description,
        RestaurantsID: restaurantImages.RestaurantsID
    }
}

