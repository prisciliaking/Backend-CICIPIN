import { RestaurantCategories, RestaurantCategoriesPairings } from "@prisma/client";

export interface createRestaurantCategoryPairing{
    restaurantID: number;
    RestaurantCategoriesID: number;
}

export interface requestRestaurantCategoryPairing{
    restaurantID: number;
    RestaurantCategoriesID: number;
}

export interface responseRestaurantCategoryPairing{
    id: number;
    restaurantID: number;
    RestaurantCategoriesID: number;
    restaurantCategories: RestaurantCategories;
}

export function toRestaurantCategoryPairingResponse(restaurantCategoriesPairings: RestaurantCategoriesPairings){
    return {
        id: restaurantCategoriesPairings.id,
        restaurantID: restaurantCategoriesPairings.restaurantID,
        RestaurantCategoriesID: restaurantCategoriesPairings.RestaurantCategoriesID,
    }
}


export interface updateRestaurantCategoryPairing{
    restaurantID: number;
    RestaurantCategoriesID: number;
}

export interface deleteRestaurantCategoryPairing{
    restaurantID: number;
    RestaurantCategoriesID: number;
}