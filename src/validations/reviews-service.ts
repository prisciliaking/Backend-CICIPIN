import{date, z, ZodType} from "zod";

export class reviewsValidation{
    static readonly REGISTER: ZodType = z.object({
        review: z.string().min(1).max(100),
        rating: z.number().min(1).max(100),
        description: z.string().min(1).max(100),
        date: z.string().min(1).max(100),
        RestaurantsID: z.number().positive()
    })
    static readonly UPDATE: ZodType = z.object({
        review: z.string().min(1).max(100),
        rating: z.number().min(1).max(100),
        description: z.string().min(1).max(100),
        RestaurantsID: z.number().positive()
    })
    static readonly DELETE: ZodType = z.object({
        review: z.string().min(1).max(100),
        rating: z.number().min(1).max(100),
        description: z.string().min(1).max(100),
        date: z.string().min(1).max(100),
        RestaurantsID: z.number().positive()
    })
}