import { z, ZodType } from "zod";

export class restaurantsImageValidation {
  static readonly REGISTER: ZodType = z.object({
    name: z.string().min(1).max(100),
    description: z.string().min(1).max(100),
    image: z.string().min(1).max(100),
    price: z.number().min(1).max(100),
    category: z.string().min(1).max(100),
    restaurantID: z.number().positive(),

  });
  static readonly UPDATE: ZodType = z.object({
    name: z.string().min(1).max(100),
    description: z.string().min(1).max(100),
    image: z.string().min(1).max(100),
    price: z.number().min(1).max(100),
    category: z.string().min(1).max(100),
    restaurantID: z.number().positive(),
  });
  static readonly DELETE: ZodType = z.object({
    name: z.string().min(1).max(100),
    description: z.string().min(1).max(100),
    image: z.string().min(1).max(100),
    price: z.number().min(1).max(100),
    category: z.string().min(1).max(100),
    restaurantID: z.number().positive(),
  });
}