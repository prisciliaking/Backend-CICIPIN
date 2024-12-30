import { Reviews } from "@prisma/client";
import { reviewsValidation } from "../validations/reviews-service";
import { requestReview, responseReview, createReview, toReviewResponse, updateReview, deleteReview } from "../models/reviews-model-response";
import { Validation } from "../validations/validation";
import { prismaClient } from "../application/database";

export class ReviewService {
    static async getAllReviews(reviews: Reviews): Promise<string> {
        const getAllReviews = await prismaClient.reviews.findMany({
            where: {
                id: reviews.id,
            },
        });
        return "Get Data was successful!";
    }

    static async getReviewById(reviews: Reviews): Promise<string> {
        const getReviewById = await prismaClient.reviews.findUnique({
            where: {
                id: reviews.id,
            },
        });
        return "getReviewById";
    }

    static async createReview(requestReview: requestReview): Promise<string> {
        // validate the request
        const validateRequest = Validation.validate(
            reviewsValidation.REGISTER,
            requestReview
        );
        // add the review to the database
        const createReview = await prismaClient.reviews.create({
            data: {
                review: validateRequest.review,
                rating: validateRequest.rating,
                description: validateRequest.description,
                date: validateRequest.date,
                RestaurantsID: validateRequest.RestaurantsID
            },
        });
        return "Data Create Successfully";
    }

    static async updateReview(UpdateReview: updateReview): Promise<responseReview> {
        // Validate the request
        const validateRequest = Validation.validate(
            reviewsValidation.UPDATE,
            UpdateReview
        );

        // Update the review in the database
        const updatedReview = await prismaClient.reviews.update({
            where: {
                id: UpdateReview.id,
            },
            data: {
                review: validateRequest.review,
                rating: validateRequest.rating,
                description: validateRequest.description,
            },
        });

        return toReviewResponse(updatedReview);
    }

    static async deleteReview(deleteReview: deleteReview): Promise<string> {
        const deleteReviewById = await prismaClient.reviews.delete({
            where: {
                id: deleteReview.id,
            },
        });
        return "Delete Review";
    }

}