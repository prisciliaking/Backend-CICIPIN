import{z, ZodType} from "zod";

export class reviewusersValidation{
    static readonly CREATE: ZodType = z.object({
        ReviewsID: z.number().positive(),
        UsersID: z.number().positive()
    })
    static readonly UPDATE: ZodType = z.object({
        ReviewsID: z.number().positive(),
        UsersID: z.number().positive()
    })
    static readonly DELETE: ZodType = z.object({
        ReviewsID: z.number().positive(),
        UsersID: z.number().positive()
    })
}