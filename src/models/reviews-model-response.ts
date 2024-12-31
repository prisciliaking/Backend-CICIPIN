import { Reviews } from "@prisma/client";

export interface createReview{
    review: string;
    rating: number;
    description: string;
    date: string;
    RestaurantsID: number;
}

export interface requestReview{
    review: string;
    rating: number;
    description: string;
    date: string;
    RestaurantsID: number;
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
        date: reviews.date,
        RestaurantsID: reviews.RestaurantsID
    }
}


export interface updateReview{
    id: number;
    review: string;
    rating: number;
    description: string;
    RestaurantsID: number;
}

export interface deleteReview{
    id: number;
    review: string;
    rating: number;
    description: string;
    date: string;
    RestaurantsID: number;
}

export interface ReviewsList{
    id: number;
    review: string;
    rating: number;
    description: string;
    date: string;
    RestaurantsID: number;
}