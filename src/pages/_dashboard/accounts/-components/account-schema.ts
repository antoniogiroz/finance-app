import { z } from 'zod';

export const accountFormSchema = z.object({
  name: z.string().min(2),
});

export type AccountFormValues = z.infer<typeof accountFormSchema>;
