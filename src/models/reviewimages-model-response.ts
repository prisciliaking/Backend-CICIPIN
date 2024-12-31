import { ReviewsImages } from "@prisma/client";

export interface createReviewImage{
    image: string;
    reviewID: number;
}

export interface requestReviewImage{
    image: string;
    reviewID: number;
}

export interface responseReviewImage{
    id: number;
    image: string;
    ReviewsID: number;
}

export function toReviewImageResponse(reviewImages: ReviewsImages){
    return {
        id: reviewImages.id,
        image: reviewImages.image,
        ReviewsID: reviewImages.ReviewsID
    }
}

export interface updateReviewImage{
    id: number;
    image: string;
    reviewID: number;
}

export interface deleteReviewImage{
    id: number;
    image: string;
    reviewID: number;
}