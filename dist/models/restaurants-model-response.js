"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toRestaurantResponse = toRestaurantResponse;
function toRestaurantResponse(restaurants) {
    return {
        id: restaurants.id,
        name: restaurants.name,
        address: restaurants.address,
        longtitude: restaurants.longtitude,
        latitude: restaurants.latitude,
        description: restaurants.description,
        UsersID: restaurants.UsersID
    };
}
