import { Request, Response } from "express";
import { UserService } from "../services/auth-user-service";
import { createUser, requestUser, responseUser, updateUser, deleteUser } from "../models/user-model-response";
import { request } from "http";

export class UsersController {
    static async getAllUsers(req: Request, res: Response) {
        const users = await UserService.getAllUsers(req.body);
        res.status(200).json(users);
    }

    static async getUserById(req: Request, res: Response) {
        const users = await UserService.getUserById(req.body);
        res.status(200).json(users);
    }

    static async createUser(req: Request, res: Response) {
        const users : requestUser = req.body as requestUser;
        const response = await UserService.createUser(users);
        res.status(201).json({
            data: response
        })
    }

    static async updateUser(req: Request, res: Response) {
        const users  = await UserService.updateUser(req.body);
        res.status(200).json(users)
    }

    static async deleteUser(req: Request, res: Response) {
        const users = await UserService.deleteUser(req.body);
        res.status(200).json(users);
    }
}