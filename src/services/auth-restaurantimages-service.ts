import { RestaurantImages } from "@prisma/client";
import { createRestaurantImage, toRestaurantImageResponse, responseRestaurantImage, requestRestaurantImage, updateRestaurantImage, deleteRestaurantImage } from "../models/restaurantimages-model-response";
import { restaurantsImageValidation } from "../validations/restaurantimages-service";
import { Validation } from "../validations/validation";
import { prismaClient } from "../application/database";

export class RestaurantImageService {
    static async getAllRestaurantImages(restaurantImages: RestaurantImages): Promise<string> {
        const getAllRestaurantImages = await prismaClient.restaurantImages.findMany({
            where: {
                id: restaurantImages.id,
            },
        });
        return "Get Data was successful!";
    }

    static async getRestaurantImageById(restaurantImages: RestaurantImages): Promise<string> {
        const getRestaurantImageById = await prismaClient.restaurantImages.findUnique({
            where: {
                id: restaurantImages.id,
            },
        });
        return "getRestaurantImageById";
    }

    static async createRestaurantImage(requestRestaurantImage: requestRestaurantImage): Promise<string> {
        // validate the request
        const validateRequest = Validation.validate(
            restaurantsImageValidation.REGISTER,
            requestRestaurantImage
        );
        // add the restaurant image to the database
        const createRestaurantImage = await prismaClient.restaurantImages.create({
            data: {
                image: validateRequest.image,
                description: validateRequest.description,
                RestaurantsID: validateRequest.RestaurantsID
            },
        });
        return "Data Create Successfully";
    }

    static async updateRestaurantImage(UpdateRestaurantImage: updateRestaurantImage): Promise<responseRestaurantImage> {
        // Validate the request
        const validateRequest = Validation.validate(
            restaurantsImageValidation.UPDATE,
            UpdateRestaurantImage
        );

        // Update the restaurant image in the database
        const updatedRestaurantImage = await prismaClient.restaurantImages.update({
            where: {
                id: UpdateRestaurantImage.id,
            },
            data: {
                image: validateRequest.image,
                description: validateRequest.description,
            },
        });

        return toRestaurantImageResponse(updatedRestaurantImage);
    }

    static async deleteRestaurantImage(deleteRestaurantImage: deleteRestaurantImage): Promise<string> { 
        const deleteRestaurantImageById = await prismaClient.restaurantImages.delete({
            where: {
                id: deleteRestaurantImage.id,
            },
        });
        return "Delete Restaurant Image";
    }
}