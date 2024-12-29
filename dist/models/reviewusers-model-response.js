"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toReviewUserResponse = toReviewUserResponse;
function toReviewUserResponse(reviewUsers) {
    return {
        id: reviewUsers.id,
        ReviewsID: reviewUsers.ReviewsID,
        UsersID: reviewUsers.UsersID,
    };
}
