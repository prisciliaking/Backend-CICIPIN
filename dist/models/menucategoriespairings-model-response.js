"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toMenuCategoryPairingResponse = toMenuCategoryPairingResponse;
function toMenuCategoryPairingResponse(menuCategoriesPairings) {
    return {
        id: menuCategoriesPairings.id,
        menuID: menuCategoriesPairings.menuID,
        MenuCategoriesID: menuCategoriesPairings.MenuCategoriesID,
    };
}
