import { ReviewsImages } from "@prisma/client";
import { createReviewImage, toReviewImageResponse, deleteReviewImage, updateReviewImage, requestReviewImage, responseReviewImage } from "../models/reviewimages-model-response";
import { reviewimagesValidation } from "../validations/reviewimages-service";
import { Validation } from "../validations/validation";
import { prismaClient } from "../application/database";

export class ReviewImagesService {
    static async getAllReviewImages(reviewImages: ReviewsImages): Promise<string> {
        const getAllReviewImages = await prismaClient.reviewsImages.findMany({
            where: {
                id: reviewImages.id,
            },
        });
        return "Get Data was successful!";
    }

    static async getReviewImageById(reviewImages: ReviewsImages): Promise<string> {
        const getReviewImageById = await prismaClient.reviewsImages.findUnique({
            where: {
                id: reviewImages.id,
            },
        });
        return "getReviewImageById";
    }

    static async createReviewImage(requestReviewImage: requestReviewImage): Promise<string> {
        // validate the request
        const validateRequest = Validation.validate(
            reviewimagesValidation.CREATE,
            requestReviewImage
        );
        // add the review image to the database
        const createReviewImage = await prismaClient.reviewsImages.create({
            data: {
                image: validateRequest.image,
                ReviewsID: validateRequest.reviewID
            },
        });
        return "Data Create Successfully";
    }

    static async updateReviewImage(UpdateReviewImage: updateReviewImage): Promise<responseReviewImage> {
        // Validate the request
        const validateRequest = Validation.validate(
            reviewimagesValidation.UPDATE,
            UpdateReviewImage
        );

        // Update the review image in the database
        const updatedReviewImage = await prismaClient.reviewsImages.update({
            where: {
                id: UpdateReviewImage.id,
            },
            data: {
                image: validateRequest.image,
            },
        });

        return toReviewImageResponse(updatedReviewImage);
    }

    static async deleteReviewImage(deleteReviewImage: deleteReviewImage): Promise<string> {
        const deleteReviewImageById = await prismaClient.reviewsImages.delete({
            where: {
                id: deleteReviewImage.id,
            },
        });
        return "Delete Review Image";
    }


    
}