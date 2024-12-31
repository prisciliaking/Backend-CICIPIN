import { Request, Response } from "express";
import { MenuService } from "../services/auth-menu-service";
import { createMenu, requestMenu, responseMenu, updateMenu, deleteMenu } from "../models/menus-model-response";

export class MenuController {
    static async getAllMenus(req: Request, res: Response) {
        const menus = await MenuService.getAllMenus(req.body);
        res.status(200).json(menus);
    }

    static async getMenuById(req: Request, res: Response) {
        const menu = await MenuService.getMenuById(req.body);
        res.status(200).json(menu);
    }

    static async createMenu(req: Request, res: Response) {
        try {
            const menu = await MenuService.createMenu(req.body);
            res.status(201).json({ message: "Menu created successfully", data: menu });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Failed to create menu", error });
        }
    }

    static async updateMenu(req: Request, res: Response) {
        const menu = await MenuService.updateMenu(req.body);
        res.status(200).json(menu);
    }

    static async deleteMenu(req: Request, res: Response) {
        const menu = await MenuService.deleteMenu(req.body);
        res.status(200).json(menu);
    }
}