import { Request, Response } from "express";
import { RestaurantService } from "../services/auth-restaurant-service";
import { createRestaurant, requestRestaurant, responseRestaurant, updateRestaurant, deleteRestaurant } from "../models/restaurants-model-response";

export class RestaurantsController {
    static async getAllRestaurants(req: Request, res: Response) {
        const restaurants = await RestaurantService.getAllRestaurants(req.body);
        res.status(200).json(restaurants);
    }

    static async getRestaurantById(req: Request, res: Response) {
        const restaurants = await RestaurantService.getRestaurantById(req.body);
        res.status(200).json(restaurants);
    }

    static async createRestaurant(req: Request, res: Response) {
        try {
          const restaurant = await RestaurantService.createRestaurant(req.body);
          res.status(201).json({ message: "Restaurant created successfully", data: restaurant });
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: "Failed to create restaurant", error });
        }
      }

    static async updateRestaurant(req: Request, res: Response) {
        const restaurants  = await RestaurantService.updateRestaurant(req.body);
        res.status(200).json(restaurants)
    }

    static async deleteRestaurant(req: Request, res: Response) {
        const restaurants = await RestaurantService.deleteRestaurant(req.body);
        res.status(200).json(restaurants);
    }
}