import { MenuCategories, MenuCategoriesPairings } from "@prisma/client";

export interface createMenuCategoryPairing{
    menuID: number;
    MenuCategoriesID: number;
}

export interface requestMenuCategoryPairing{
    menuID: number;
    MenuCategoriesID: number;
}

export interface responseMenuCategoryPairing{
    id: number;
    menuID: number;
    MenuCategoriesID: number;
    menuCategories: MenuCategories;
}

export function toMenuCategoryPairingResponse(menuCategoriesPairings: MenuCategoriesPairings){
    return {
        id: menuCategoriesPairings.id,
        menuID: menuCategoriesPairings.menuID,
        MenuCategoriesID: menuCategoriesPairings.MenuCategoriesID,
    }
}


export interface updateMenuCategoryPairing{
    menuID: number;
    MenuCategoriesID: number;
}

export interface deleteMenuCategoryPairing{
    menuID: number;
    MenuCategoriesID: number;
}