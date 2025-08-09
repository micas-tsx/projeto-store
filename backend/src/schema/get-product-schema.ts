import z from "zod";

export const getProductSchema = z.object({
  metadata: z.string().optional(),
  orderby: z.enum(['views', 'selling', 'price']).optional(),
  limit: z.string().regex(/^\d+$/).optional()
})