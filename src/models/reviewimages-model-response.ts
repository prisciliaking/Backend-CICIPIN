import { ReviewsImages } from "@prisma/client";

export interface createReviewImage{
    image: string;
}

export interface requestReviewImage{
    image: string;
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
    image: string;
}

export interface deleteReviewImage{
    image: string;
}