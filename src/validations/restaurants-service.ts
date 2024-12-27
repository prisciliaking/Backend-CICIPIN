import{z, ZodType} from "zod";

export class restaurantsValidation{
    static readonly CREATE: ZodType = z.object({
        name: z.string().min(1).max(100),
        address: z.string().min(1).max(100),
        longtitude: z.string().min(1).max(100),
        latitude: z.string().min(1).max(100),
        description: z.string().min(1).max(100),
        UsersID: z.number().positive()
    })
    static readonly UPDATE: ZodType = z.object({
        name: z.string().min(1).max(100),
        address: z.string().min(1).max(100),
        longtitude: z.string().min(1).max(100),
        latitude: z.string().min(1).max(100),
        description: z.string().min(1).max(100)
    })
    static readonly DELETE: ZodType = z.object({
        name: z.string().min(1).max(100),
        address: z.string().min(1).max(100),
        longtitude: z.string().min(1).max(100),
        latitude: z.string().min(1).max(100),
        description: z.string().min(1).max(100),
        UsersID: z.number().positive()
    })
}