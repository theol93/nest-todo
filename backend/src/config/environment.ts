import { z } from 'zod';
const environmentSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'test', 'production'])
    .default('development'),
  PORT: z.coerce.number().int().min(1).max(65535).default(4000),
  FRONTEND_URL: z
    .url()
    .refine(
      (value) =>
        ['http:', 'https:'].includes(new URL(value).protocol) &&
        new URL(value).origin === value,
      'Must be an HTTP(S) origin',
    )
    .default('http://localhost:3000'),
  DATABASE_URL: z.url().refine((value) => {
    const url = new URL(value);
    return (
      ['postgres:', 'postgresql:'].includes(url.protocol) &&
      url.hostname.length > 0 &&
      url.pathname.length > 1
    );
  }, 'Must be a PostgreSQL URL with a host and database'),
});
export function validateEnvironment(input: Record<string, unknown>) {
  return environmentSchema.parse(input);
}
