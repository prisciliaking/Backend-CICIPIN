"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toRestaurantResponse = toRestaurantResponse;
exports.toUpdateRestaurantResponse = toUpdateRestaurantResponse;
function toRestaurantResponse(restaurants) {
    return {
        name: restaurants.name,
        address: restaurants.address,
        longtitude: restaurants.longtitude,
        latitude: restaurants.latitude,
        description: restaurants.description
    };
}
function toUpdateRestaurantResponse(restaurants) {
    return {
        id: restaurants.id,
        name: restaurants.name,
        address: restaurants.address,
        longtitude: restaurants.longtitude,
        latitude: restaurants.latitude,
        description: restaurants.description,
    };
}
