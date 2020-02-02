import Joi from '@hapi/joi';

const number = Joi.string().regex(/^\d+$/);

export default Joi.object()
  .keys({
    keys: Joi.object().keys({
      PUBLIC: Joi.string().required().min(30),
      SECRET: Joi.string().required().min(30)
    }).options({ allowUnknown: false }),
    payload: Joi.object().keys({
      cardno: number.required().min(15),
      cvv: number.required().min(3),
      expirymonth: number.required().length(2),
      expiryyear: number.required().length(2),
      currency: Joi.string().required().length(3),
      country: Joi.string().required().min(2).max(3),
      amount: number.required(),
      email: Joi.string().email().required(),
      phonenumber: Joi.string().min(10),
      firstname: Joi.string().min(1),
      lastname: Joi.string().min(1),
      txRef: Joi.required()
    }).options({ allowUnknown: false })
  })
  .options({ allowUnknown: false });
