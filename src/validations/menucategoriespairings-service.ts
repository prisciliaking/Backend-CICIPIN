import{z, ZodType} from "zod";

export class menucategoriespairingsValidation{
    static readonly CREATE: ZodType = z.object({
        menuID: z.number().positive(),
        MenuCategoriesID: z.number().positive()
    })
    static readonly UPDATE: ZodType = z.object({
        menuID: z.number().positive(),
        MenuCategoriesID: z.number().positive()
    })
    static readonly DELETE: ZodType = z.object({
        menuID: z.number().positive(),
        MenuCategoriesID: z.number().positive()
    })
}