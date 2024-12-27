import { Reviews } from "@prisma/client";

export interface createReview{
    review: string;
    rating: number;
    description: string;
}

export interface requestReview{
    review: string;
    rating: number;
    description: string;
}

export interface responseReview{
    id: number;
    review: string;
    rating: number;
    description: string;
    RestaurantsID: number;
}

export function toReviewResponse(reviews: Reviews){
    return {
        id: reviews.id,
        review: reviews.review,
        rating: reviews.rating,
        description: reviews.description,
        RestaurantsID: reviews.RestaurantsID
    }
}


export interface updateReview{
    review: string;
    rating: number;
    description: string;
}

export interface deleteReview{
    review: string;
    rating: number;
    description: string;
}