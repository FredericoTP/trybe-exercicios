import { emailSchema } from './schemas';

const validateEmail = (email: string) => {
  const { error } = emailSchema.validate(email);

  if (error) return { type: 'INVALID_VALUE', message: '"email" must be valid' }

  return { type: null, message: '' }
}

export { validateEmail }