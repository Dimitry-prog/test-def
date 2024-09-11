import { z } from 'zod';
import { socketFormSchema } from '@/pages/socket/schema';

export type SocketFormType = z.infer<typeof socketFormSchema>;
