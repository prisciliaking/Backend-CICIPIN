import { Bookmarks } from "@prisma/client";

export interface createBookmark{
    isBookmarked: boolean;
}

export interface requestBookmark{
    isBookmarked: boolean;
}

export interface responseBookmark{
    id: number;
    isBookmarked: boolean;
    UsersID: number;
    RestaurantsID: number;
}

export function toBookmarkResponse(bookmarks: Bookmarks){
    return {
        id: bookmarks.id,
        isBookmarked: bookmarks.isBookmarked,
        UsersID: bookmarks.UsersID,
        RestaurantsID: bookmarks.RestaurantsID
    }
}
