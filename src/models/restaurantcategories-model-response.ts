import { RestaurantCategories, RestaurantCategoriesPairings } from "@prisma/client";

export interface createRestaurantCategory{
    categoryName: string;
}

export interface requestRestaurantCategory{
    categoryName: string;
}

export interface responseRestaurantCategory{
    id: number;
    categoryName: string;
    restaurantCategoriesPairings: RestaurantCategoriesPairings[];
}

export function toRestaurantCategoryResponse(restaurantCategories: RestaurantCategories, restaurantCategoriesPairings: RestaurantCategoriesPairings){
    return {
        id: restaurantCategories.id,
        categoryName: restaurantCategories.categoryName,
        restaurantCategoriesPairings: restaurantCategoriesPairings.id
    }
}


export interface updateRestaurantCategory{
    categoryName: string;
}

export interface deleteRestaurantCategory{
    categoryName: string;
}