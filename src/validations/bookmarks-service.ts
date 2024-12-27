import{z, ZodType} from "zod";

export class bookmarksValidation{
    static readonly CREATE: ZodType = z.object({
        isBookmarked: z.boolean(),
        UsersID: z.number().positive(),
        RestaurantsID: z.number().positive()
    })
    static readonly UPDATE: ZodType = z.object({
        isBookmarked: z.boolean(),
        UsersID: z.number().positive(),
        RestaurantsID: z.number().positive()
    })
    static readonly DELETE: ZodType = z.object({
        isBookmarked: z.boolean(),
        UsersID: z.number().positive(),
        RestaurantsID: z.number().positive()
    })
}