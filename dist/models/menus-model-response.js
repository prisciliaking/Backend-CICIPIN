"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toMenuResponse = toMenuResponse;
function toMenuResponse(menus) {
    return {
        id: menus.id,
        name: menus.name,
        image: menus.image,
        description: menus.description,
        price: menus.price,
        RestaurantsID: menus.RestaurantsID
    };
}
