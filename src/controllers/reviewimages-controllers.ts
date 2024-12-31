import { Request, Response } from "express";
import { ReviewImagesService } from "../services/auth-reviewimages-service"; 

export class ReviewImagesController{
    static async getAllReviewImages(req: Request, res: Response){
        const reviewImages = await ReviewImagesService.getAllReviewImages(req.body);
        res.status(200).json(reviewImages);
    }

    static async getReviewImageById(req: Request, res: Response){
        const reviewImages = await ReviewImagesService.getReviewImageById(req.body);
        res.status(200).json(reviewImages);
    }   

    static async createReviewImage(req: Request, res: Response) {
        const reviewImages = await ReviewImagesService.createReviewImage(req.body);
        res.status(201).json(reviewImages);
    }

    static async updateReviewImage(req: Request, res: Response) {
        const reviewImages = await ReviewImagesService.updateReviewImage(req.body);
        res.status(200).json(reviewImages);
    }   

    static async deleteReviewImage(req: Request, res: Response) {
        const reviewImages = await ReviewImagesService.deleteReviewImage(req.body);
        res.status(200).json(reviewImages);
    }
}