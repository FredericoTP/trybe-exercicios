import Joi, { StringSchema } from 'joi';

const emailSchema: StringSchema = Joi.string().email().required();

export { emailSchema }