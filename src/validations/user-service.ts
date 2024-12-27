import{z, ZodType} from "zod";

export class userValidation{
    static readonly REGISTER: ZodType = z.object({
        name: z.string().min(1).max(100),
        username: z.string().min(1).max(100),
        email: z.string().email(),
        password: z.string().min(1).max(100),
        profile_picture: z.string(),
        role: z.string()
    })
    static readonly LOGIN: ZodType = z.object({
        username: z.string().min(1).max(100),
        password: z.string().min(1).max(100)
    })
    static readonly UPDATE: ZodType = z.object({
        name: z.string().min(1).max(100),
        username: z.string().min(1).max(100),
        email: z.string().email(),
        password: z.string().min(1).max(100),
        profile_picture: z.string(),
        role: z.string()
    })
    static readonly DELETE: ZodType = z.object({
        name: z.string(),
        username: z.string(),
        email: z.string(),
        password: z.string(),
        profile_picture: z.string(),
        role: z.string()
    })
}