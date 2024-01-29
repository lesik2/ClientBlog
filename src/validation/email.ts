import { object, string, InferType, ObjectSchema } from 'yup';

type EmailSchemaType = ObjectSchema<{
  user_email: string;
}>;
export const emailSchema: EmailSchemaType = object({
  user_email: string().email().required(),
});

export type Email = InferType<typeof emailSchema>;
