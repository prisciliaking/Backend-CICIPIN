import { ReviewUsers } from "@prisma/client";

export interface createReviewUser{
    ReviewsID: number;
    UsersID: number;
}

export interface requestReviewUser{
    ReviewsID: number;
    UsersID: number;
}

export interface responseReviewUser{
    id: number;
    ReviewsID: number;
    UsersID: number;
    reviewUsers: ReviewUsers[];
}

export function toReviewUserResponse(reviewUsers: ReviewUsers){
    return {
        id: reviewUsers.id,
        ReviewsID: reviewUsers.ReviewsID,
        UsersID: reviewUsers.UsersID,
    }
}


export interface updateReviewUser{
    ReviewsID: number;
    UsersID: number;
}

export interface deleteReviewUser{
    ReviewsID: number;
    UsersID: number;
}