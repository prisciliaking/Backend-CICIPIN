import{z, ZodType} from "zod";

export class reviewsValidation{
    static readonly CREATE: ZodType = z.object({
        review: z.string().min(1).max(100),
        rating: z.number().min(1).max(100),
        description: z.string().min(1).max(100),
        RestaurantsID: z.number().positive()
    })
    static readonly UPDATE: ZodType = z.object({
        review: z.string().min(1).max(100),
        rating: z.number().min(1).max(100),
        description: z.string().min(1).max(100)
    })
    static readonly DELETE: ZodType = z.object({
        review: z.string().min(1).max(100),
        rating: z.number().min(1).max(100),
        description: z.string().min(1).max(100),
        RestaurantsID: z.number().positive()
    })
}