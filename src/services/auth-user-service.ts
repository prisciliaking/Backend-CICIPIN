import { Users } from "@prisma/client";
import { userValidation } from "../validations/user-service";
import {
  requestUser,
  responseUser,
  toUserResponse,
  updateUser,
  toUpdateUserResponse,
  deleteUser
} from "../models/user-model-response";
import { Validation } from "../validations/validation";
import { prismaClient } from "../application/database";

export class UserService {
  static async getAllUsers(users: Users): Promise<string> {
    const getAllUsers = await prismaClient.users.findMany();
    return "Get All Users";
  }

  static async getUserById(users: Users): Promise<string> {
    const getUserById = await prismaClient.users.findUnique({
      where: {
        id: users.id,
      },
    });
    return "Get User By Id";
  }

  static async createUser(requestUser: requestUser): Promise<string> {
    // validate the request
    const validateRequest = Validation.validate(
      userValidation.REGISTER,
      requestUser
    );

    await prismaClient.users.create({
      data: {
        name: validateRequest.name,
        role: validateRequest.role,
        username: validateRequest.username,
        password: validateRequest.password,
        email: validateRequest.email,
        profile_picture: validateRequest.profile_picture,
      },
    });
    return "Create User";
  }

  static async updateUser(UpdateUser: updateUser): Promise<responseUser> {
    // validate the request
    const validateRequest = Validation.validate(
      userValidation.REGISTER,
      UpdateUser
    );

    // add the user to the database
    const updateUser = await prismaClient.users.update({
      where: {
        id: UpdateUser.id,
      },
      data: {
        name: validateRequest.name,
        role: validateRequest.role,
        username: validateRequest.username,
        password: validateRequest.password,
        email: validateRequest.email,
        profile_picture: validateRequest.profile_picture,
      },
    });

    return toUpdateUserResponse(updateUser);
  }

  static async deleteUser(deleteUser: deleteUser): Promise<string> {
    const deleteUserById = await prismaClient.users.delete({
      where: {
        id: deleteUser.id,
      },
    });
    return "Delete User";
  }
  
}
