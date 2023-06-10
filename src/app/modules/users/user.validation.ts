import { z } from 'zod';

const createuserZodSchema = z.object({
  body: z.object({
    role: z.string({
      required_error: 'role is required',
    }),
    password: z.string().optional(),
  }),
});

export const UserValidation = {
  createuserZodSchema,
};

//   await createuserZodSchema.parseAsync(req)
