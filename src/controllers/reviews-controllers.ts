import { Request, Response } from "express";
import { ReviewService } from "../services/auth-review-service";
import { createReview, requestReview, responseReview, updateReview, deleteReview } from "../models/reviews-model-response";

export class ReviewsController {
    static async getAllReviews(req: Request, res: Response) {
        const reviews = await ReviewService.getAllReviews(req.body);
        res.status(200).json(reviews);
    }

    static async getReviewById(req: Request, res: Response) {
        const reviews = await ReviewService.getReviewById(req.body);
        res.status(200).json(reviews);
    }

    static async createReview(req: Request, res: Response) {
        const reviews = await ReviewService.createReview(req.body);
        res.status(201).json(reviews);
    }

    static async updateReview(req: Request, res: Response) {
        const reviews = await ReviewService.updateReview(req.body);
        res.status(200).json(reviews);
    }

    static async deleteReview(req: Request, res: Response) {
        const reviews = await ReviewService.deleteReview(req.body);
        res.status(200).json(reviews);
    }

}