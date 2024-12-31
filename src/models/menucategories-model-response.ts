import { MenuCategories} from "@prisma/client";

export interface createMenuCategory{
    categoryName: string;
}

export interface requestMenuCategory{
    categoryName: string;
}

export interface responseMenuCategory{
    id: number;
    categoryName: string;
}

export function toMenuCategoryResponse(menuCategories: MenuCategories){
    return {
        id: menuCategories.id,
        categoryName: menuCategories.categoryName
    }
}

export interface updateMenuCategory{
    id: number;
    categoryName: string;
}

export interface deleteMenuCategory{
    id: number;
    categoryName: string;
}