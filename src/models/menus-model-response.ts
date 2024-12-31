import { Menus } from "@prisma/client";

export interface createMenu{
    id: number;
    name: string;
    image: string;
    description: string;
    price: string;
}

export interface requestMenu{
    name: string;
    image: string;
    description: string;
    price: string;
    RestaurantsID: number;
}

export interface responseMenu{
    id: number;
    name: string;
    image: string;
    description: string;
    price: string;
    RestaurantsID: number;
}

export function toMenuResponse(menus: Menus){
    return {
        id: menus.id,
        name: menus.name,
        image: menus.image,
        description: menus.description,
        price: menus.price,
        RestaurantsID: menus.RestaurantsID
    }
}

export interface updateMenu{
    id: number;
    name: string;
    image: string;
    description: string;
    price: string;
}

export interface deleteMenu{
    id: number;
    name: string;
    image: string;
    description: string;
    price: string;
}