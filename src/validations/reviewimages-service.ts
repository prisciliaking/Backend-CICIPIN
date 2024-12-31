import{z, ZodType} from "zod";

export class reviewimagesValidation{
    static readonly CREATE: ZodType = z.object({
        image: z.string().min(1).max(100),
        reviewID: z.number().positive()
    })
    static readonly UPDATE: ZodType = z.object({
        image: z.string().min(1).max(100)
    })
    static readonly DELETE: ZodType = z.object({
        image: z.string().min(1).max(100)
    })
}