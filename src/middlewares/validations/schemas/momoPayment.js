import Joi from '@hapi/joi';

const number = Joi.string().regex(/^\d+$/);

export default Joi.object()
  .keys({
    keys: Joi.object().keys({
      PUBLIC: Joi.string().required().min(30),
      SECRET: Joi.string().required().min(30)
    }).options({ allowUnknown: false }),
    payload: Joi.object().keys({
      amount: number.required(),
      email: Joi.string().email().required(),
      phonenumber: Joi.string().min(10),
      firstname: Joi.string().min(1),
      lastname: Joi.string().min(1),
      txRef: Joi.required()
    }).options({ allowUnknown: false })
  })
  .options({ allowUnknown: false });
