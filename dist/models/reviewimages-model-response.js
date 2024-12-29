"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toReviewImageResponse = toReviewImageResponse;
function toReviewImageResponse(reviewImages) {
    return {
        id: reviewImages.id,
        image: reviewImages.image,
        ReviewsID: reviewImages.ReviewsID
    };
}
