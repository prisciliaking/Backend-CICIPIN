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
exports.ReviewService = void 0;
const reviews_service_1 = require("../validations/reviews-service");
const reviews_model_response_1 = require("../models/reviews-model-response");
const validation_1 = require("../validations/validation");
const database_1 = require("../application/database");
class ReviewService {
    static getAllReviews(reviews) {
        return __awaiter(this, void 0, void 0, function* () {
            const getAllReviews = yield database_1.prismaClient.reviews.findMany({
                where: {
                    id: reviews.id,
                },
            });
            return "Get Data was successful!";
        });
    }
    static getReviewById(reviews) {
        return __awaiter(this, void 0, void 0, function* () {
            const getReviewById = yield database_1.prismaClient.reviews.findUnique({
                where: {
                    id: reviews.id,
                },
            });
            return "getReviewById";
        });
    }
    static createReview(requestReview) {
        return __awaiter(this, void 0, void 0, function* () {
            // validate the request
            const validateRequest = validation_1.Validation.validate(reviews_service_1.reviewsValidation.REGISTER, requestReview);
            // add the review to the database
            const createReview = yield database_1.prismaClient.reviews.create({
                data: {
                    review: validateRequest.review,
                    rating: validateRequest.rating,
                    description: validateRequest.description,
                    date: validateRequest.date,
                    RestaurantsID: validateRequest.RestaurantsID
                },
            });
            return "Data Create Successfully";
        });
    }
    static updateReview(UpdateReview) {
        return __awaiter(this, void 0, void 0, function* () {
            // Validate the request
            const validateRequest = validation_1.Validation.validate(reviews_service_1.reviewsValidation.UPDATE, UpdateReview);
            // Update the review in the database
            const updatedReview = yield database_1.prismaClient.reviews.update({
                where: {
                    id: UpdateReview.id,
                },
                data: {
                    review: validateRequest.review,
                    rating: validateRequest.rating,
                    description: validateRequest.description,
                },
            });
            return (0, reviews_model_response_1.toReviewResponse)(updatedReview);
        });
    }
    static deleteReview(deleteReview) {
        return __awaiter(this, void 0, void 0, function* () {
            const deleteReviewById = yield database_1.prismaClient.reviews.delete({
                where: {
                    id: deleteReview.id,
                },
            });
            return "Delete Review";
        });
    }
}
exports.ReviewService = ReviewService;
