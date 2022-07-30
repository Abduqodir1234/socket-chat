import Joi from 'joi';
export const messageCreateInput = Joi.object({
  sender: Joi.string().hex().length(24).required(),
  receiver: Joi.string().hex().length(24).required(),
  message: Joi.string().required(),
});
