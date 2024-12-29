"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toBookmarkResponse = toBookmarkResponse;
function toBookmarkResponse(bookmarks) {
    return {
        id: bookmarks.id,
        isBookmarked: bookmarks.isBookmarked,
        UsersID: bookmarks.UsersID,
        RestaurantsID: bookmarks.RestaurantsID
    };
}
