import { RestaurantImages } from "@prisma/client";

export interface createRestaurantImage{
    image: string;
    description: string;
    RestaurantsID: number;
}

export interface requestRestaurantImage{
    image: string;
    description: string;
    RestaurantsID: number;
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

export interface updateRestaurantImage{
    id: number;
    image: string;
    description: string;
    RestaurantsID: number;
}

export interface deleteRestaurantImage{
    id: number;
    image: string;
    description: string;
    RestaurantsID: number;
}

