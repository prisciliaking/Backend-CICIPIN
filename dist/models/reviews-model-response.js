"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toReviewResponse = toReviewResponse;
function toReviewResponse(reviews) {
    return {
        id: reviews.id,
        review: reviews.review,
        rating: reviews.rating,
        description: reviews.description,
        date: reviews.date,
        RestaurantsID: reviews.RestaurantsID
    };
}
