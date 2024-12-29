"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const user_service_1 = require("../validations/user-service");
const user_model_response_1 = require("../models/user-model-response");
const validation_1 = require("../validations/validation");
const database_1 = require("../application/database");
class UserService {
    static getAllUsers(users) {
        return __awaiter(this, void 0, void 0, function* () {
            const getAllUsers = yield database_1.prismaClient.users.findMany();
            return "Get All Users";
        });
    }
    static getUserById(users) {
        return __awaiter(this, void 0, void 0, function* () {
            const getUserById = yield database_1.prismaClient.users.findUnique({
                where: {
                    id: users.id,
                }
            });
            return "Get User By Id";
        });
    }
    static createUser(requestUser) {
        return __awaiter(this, void 0, void 0, function* () {
            // validate the request
            const validateRequest = validation_1.Validation.validate(user_service_1.userValidation.REGISTER, requestUser);
            yield database_1.prismaClient.users.create({
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
        });
    }
    static updateUser(UpdateUser) {
        return __awaiter(this, void 0, void 0, function* () {
            // validate the request
            const validateRequest = validation_1.Validation.validate(user_service_1.userValidation.UPDATE, UpdateUser);
            // add the user to the database
            const updateUser = yield database_1.prismaClient.users.update({
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
            return (0, user_model_response_1.toUpdateUserResponse)(updateUser);
        });
    }
    static deleteUser(deleteUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const deleteUserById = yield database_1.prismaClient.users.delete({
                where: {
                    id: deleteUser.id,
                },
            });
            return "Delete User";
        });
    }
}
exports.UserService = UserService;
