import { z } from 'zod'

export const schema = z.object({
  id: z.number(),
  name: z.string().trim().min(1),
})

export type FormSchema = z.infer<typeof schema>
