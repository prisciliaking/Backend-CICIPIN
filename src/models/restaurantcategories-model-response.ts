import { RestaurantCategories } from "@prisma/client";

export interface createRestaurantCategory{
    categoryName: string;
}

export interface requestRestaurantCategory{
    categoryName: string;
}

export interface responseRestaurantCategory{
    id: number;
    categoryName: string;
}

export function toRestaurantCategoryResponse(restaurantCategories: RestaurantCategories){
    return {
        id: restaurantCategories.id,
        categoryName: restaurantCategories.categoryName,
    }
}


export interface updateRestaurantCategory{
    id: number;
    categoryName: string;

}

export interface deleteRestaurantCategory{
    id: number;
    categoryName: string;
}