import{z, ZodType} from "zod";

export class menusValidation{
    static readonly CREATE: ZodType = z.object({
        name: z.string().min(1).max(100),
        image: z.string().min(1).max(100),
        description: z.string().min(1).max(100),
        price: z.string().min(1).max(100),
        RestaurantsID: z.number().positive()
    })
    static readonly UPDATE: ZodType = z.object({
        name: z.string().min(1).max(100),
        image: z.string().min(1).max(100),
        description: z.string().min(1).max(100),
        price: z.string().min(1).max(100)
    })
    static readonly DELETE: ZodType = z.object({
        name: z.string().min(1).max(100),
        image: z.string().min(1).max(100),
        description: z.string().min(1).max(100),
        price: z.string().min(1).max(100),
        RestaurantsID: z.number().positive()
    })
}