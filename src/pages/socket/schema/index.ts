import { z } from 'zod';

export const socketFormSchema = z.object({
  message: z.string().min(2, {
    message: 'Message must be at least 2 characters.',
  }),
});
