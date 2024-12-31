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
exports.ReviewsController = void 0;
const auth_review_service_1 = require("../services/auth-review-service");
class ReviewsController {
    static getAllReviews(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const reviews = yield auth_review_service_1.ReviewService.getAllReviews(req.body);
            res.status(200).json(reviews);
        });
    }
    static getReviewById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const reviews = yield auth_review_service_1.ReviewService.getReviewById(req.body);
            res.status(200).json(reviews);
        });
    }
    static createReview(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const reviews = yield auth_review_service_1.ReviewService.createReview(req.body);
            res.status(201).json(reviews);
        });
    }
    static updateReview(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const reviews = yield auth_review_service_1.ReviewService.updateReview(req.body);
            res.status(200).json(reviews);
        });
    }
    static deleteReview(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const reviews = yield auth_review_service_1.ReviewService.deleteReview(req.body);
            res.status(200).json(reviews);
        });
    }
}
exports.ReviewsController = ReviewsController;
