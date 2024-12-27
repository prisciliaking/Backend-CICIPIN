import{z, ZodType} from "zod";

export class restaurantcategoriesValidation{
    static readonly CREATE: ZodType = z.object({
        categoryName: z.string().min(1).max(100)
    })
    static readonly UPDATE: ZodType = z.object({
        categoryName: z.string().min(1).max(100)
    })
    static readonly DELETE: ZodType = z.object({
        categoryName: z.string().min(1).max(100)
    })
}