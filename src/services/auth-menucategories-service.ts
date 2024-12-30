import { MenuCategories } from "@prisma/client";
import { menucategoriesValidation } from "../validations/menucategories-service";
import { createMenuCategory, toMenuCategoryResponse, deleteMenuCategory, updateMenuCategory, responseMenuCategory } from "../models/menucategories-model-response";
import { Validation } from "../validations/validation";
import { prismaClient } from "../application/database";

export class MenuCategoryService {
  static async getAllMenuCategories(
    menuCategories: MenuCategories
  ): Promise<string> {
    const getAllMenuCategories = await prismaClient.menuCategories.findMany({
      where: {
        id: menuCategories.id,
      },
    });
    return "Get Data was successful!";
  }

  static async getMenuCategoryById(
    menuCategories: MenuCategories
  ): Promise<string> {
    const getMenuCategoryById = await prismaClient.menuCategories.findUnique({
      where: {
        id: menuCategories.id,
      },
    });
    return "getMenuCategoryById";
  }

  static async createMenuCategory(
    requestMenuCategory: createMenuCategory
  ): Promise<string> {
    // validate the request
    const validateRequest = Validation.validate(
      menucategoriesValidation.CREATE,
      requestMenuCategory
    );
    // add the menu category to the database
    const createMenuCategory = await prismaClient.menuCategories.create({
      data: {
        categoryName: validateRequest.categoryName,
      },
    });
    return "Data Create Successfully";
  }

  static async updateMenuCategory(
    UpdateMenuCategory: updateMenuCategory
  ): Promise<responseMenuCategory> {
    // Validate the request
    const validateRequest = Validation.validate(
      menucategoriesValidation.UPDATE,
      UpdateMenuCategory
    );

    // Update the menu category in the database
    const updatedMenuCategory = await prismaClient.menuCategories.update({
      where: {
        id: UpdateMenuCategory.id,
      },
      data: {
        categoryName: validateRequest.categoryName,
      },
    });

    return toMenuCategoryResponse(updatedMenuCategory);
  }

  static async deleteMenuCategory(
    deleteMenuCategory: deleteMenuCategory
  ): Promise<string> {
    const deleteMenuCategoryById = await prismaClient.menuCategories.delete({
      where: {
        id: deleteMenuCategory.id,
      },
    });
    return "Delete Menu Category";
  }

  
}