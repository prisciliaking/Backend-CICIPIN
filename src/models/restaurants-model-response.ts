import { Restaurants } from "@prisma/client";

export interface createRestaurant{
    name: string;
    address: string;
    longtitude: string;
    latitude: string;
    description: string;
}

export interface requestRestaurant{
    name: string;
    address: string;
    longtitude: string;
    latitude: string;
    description: string;
}

export interface responseRestaurant{
    id: number;
    name: string;
    address: string;
    longtitude: string;
    latitude: string;
    description: string;
    UsersID: number;
}

export function toRestaurantResponse(restaurants: Restaurants){
    return {
        id: restaurants.id,
        name: restaurants.name,
        address: restaurants.address,
        longtitude: restaurants.longtitude,
        latitude: restaurants.latitude,
        description: restaurants.description,
        UsersID: restaurants.UsersID
    }
}

export interface updateRestaurant{
    name: string;
    address: string;
    longtitude: string;
    latitude: string;
    description: string;
}

export interface deleteRestaurant{
    name: string;
    address: string;
    longtitude: string;
    latitude: string;
    description: string;
}