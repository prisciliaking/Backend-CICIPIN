import { MenuCategories, MenuCategoriesPairings } from "@prisma/client";

export interface createMenuCategory{
    categoryName: string;
}

export interface requestMenuCategory{
    categoryName: string;
}

export interface responseMenuCategory{
    id: number;
    categoryName: string;
    menuCategoriesPairings: MenuCategoriesPairings[];
}

export function toMenuCategoryResponse(menuCategories: MenuCategories, menuCategoriesPairings: MenuCategoriesPairings){
    return {
        id: menuCategories.id,
        categoryName: menuCategories.categoryName,
        menuCategoriesPairings: menuCategoriesPairings.id
    }
}

export interface updateMenuCategory{
    categoryName: string;
}

export interface deleteMenuCategory{
    categoryName: string;
}