import { RestaurantCategories } from "@prisma/client";
import { restaurantcategoriesValidation } from "../validations/restaurantcategories-service";
import { createRestaurantCategory, toRestaurantCategoryResponse, deleteRestaurantCategory, updateRestaurantCategory, responseRestaurantCategory, requestRestaurantCategory } from "../models/restaurantcategories-model-response"; 
import { Validation } from "../validations/validation";
import { prismaClient } from "../application/database";

export class RestaurantCategoryService {
    static async getAllRestaurantCategories(restaurantCategories: RestaurantCategories): Promise<string> {
        const getAllRestaurantCategories = await prismaClient.restaurantCategories.findMany({
            where: {
                id: restaurantCategories.id,
            },
        });
        return "Get Data was successful!";
    }

    static async getRestaurantCategoryById(restaurantCategories: RestaurantCategories): Promise<string> {
        const getRestaurantCategoryById = await prismaClient.restaurantCategories.findUnique({
            where: {
                id: restaurantCategories.id,
            },
        });
        return "getRestaurantCategoryById";
    }

    static async createRestaurantCategory(requestRestaurantCategory: requestRestaurantCategory): Promise<string> {
        // validate the request
        const validateRequest = Validation.validate(
            restaurantcategoriesValidation.CREATE,
            requestRestaurantCategory
        );
        // add the restaurant category to the database
        const createRestaurantCategory = await prismaClient.restaurantCategories.create({
            data: {
                categoryName: validateRequest.categoryName,
            },
        });
        return "Data Create Successfully";
    }

    static async updateRestaurantCategory(UpdateRestaurantCategory: updateRestaurantCategory): Promise<responseRestaurantCategory> {
        // Validate the request
        const validateRequest = Validation.validate(
            restaurantcategoriesValidation.UPDATE,
            UpdateRestaurantCategory
        );

        // Update the restaurant category in the database
        const updatedRestaurantCategory = await prismaClient.restaurantCategories.update({
            where: {
                id: UpdateRestaurantCategory.id,
            },
            data: {
                categoryName: validateRequest.categoryName,
            },
        });

        return toRestaurantCategoryResponse(updatedRestaurantCategory);
    }

    static async deleteRestaurantCategory(deleteRestaurantCategory: deleteRestaurantCategory): Promise<string> {
        const deleteRestaurantCategoryById = await prismaClient.restaurantCategories.delete({
            where: {
                id: deleteRestaurantCategory.id,
            },
        });
        return "Delete Restaurant Category";
    }
}