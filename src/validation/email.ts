import { object, string, InferType, ObjectSchema } from 'yup';

type EmailSchemaType = ObjectSchema<{
  email: string;
}>;
export const emailSchema: EmailSchemaType = object({
  email: string().email().required(),
});

export type Email = InferType<typeof emailSchema>;
