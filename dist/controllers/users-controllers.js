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
exports.UsersController = void 0;
const auth_user_service_1 = require("../services/auth-user-service");
class UsersController {
    static getAllUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield auth_user_service_1.UserService.getAllUsers(req.body);
            res.status(200).json(users);
        });
    }
    static getUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield auth_user_service_1.UserService.getUserById(req.body);
            res.status(200).json(users);
        });
    }
    static createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = req.body;
            const response = yield auth_user_service_1.UserService.createUser(users);
            res.status(201).json({
                data: response
            });
        });
    }
    static updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield auth_user_service_1.UserService.updateUser(req.body);
            res.status(200).json(users);
        });
    }
    static deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield auth_user_service_1.UserService.deleteUser(req.body);
            res.status(200).json(users);
        });
    }
    static getUserRestaurants(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usersWithRestaurants = yield auth_user_service_1.UserService.getUserRestaurants();
            res.status(200).json(usersWithRestaurants);
        });
    }
}
exports.UsersController = UsersController;
