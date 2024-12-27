import {z, ZodType} from "zod";

export class restaurantscategoriespairingsValidation{
    static readonly CREATE: ZodType = z.object({
        restaurantID: z.number().positive(),
        RestaurantCategoriesID: z.number().positive()
    })
    static readonly UPDATE: ZodType = z.object({
        restaurantID: z.number().positive(),
        RestaurantCategoriesID: z.number().positive()
    })
    static readonly DELETE: ZodType = z.object({
        restaurantID: z.number().positive(),
        RestaurantCategoriesID: z.number().positive()
    })
}