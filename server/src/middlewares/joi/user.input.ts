import Joi from "joi"
export const userCreateInputValidation = Joi.object({
  username:Joi.string().min(3).max(20).required(),
  email:Joi.string().email().max(50).required(),
  password:Joi.string().min(8).required(),
  confirm_password:Joi.ref("password"),
})

export const userLoginValidation = Joi.object({
  username:Joi.string().min(3).max(20).required(),
  password:Joi.string().min(8).required(),
})